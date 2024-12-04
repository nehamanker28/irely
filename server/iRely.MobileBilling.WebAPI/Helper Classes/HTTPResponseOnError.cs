using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;

using iRely.Common;

namespace iRely.MobileBilling.WebAPI.Helper_Classes
{
    public static class HTTPResponseOnError
    {
        public static HttpResponseMessage ReturnHTTPErrorResponse(HttpRequestMessage Request, Exception ex)
        {
            // Create a new SaveResult object
            var saveResult = new SaveResult();
            saveResult.Exception = new ServerException(ex);
            saveResult.HasError = true;

            // Create a generic HTTP response data. 
            var responseData = new
            {
                success = false,
                message = new
                {
                    statusText = saveResult.Exception.Message,
                    status = saveResult.Exception.Error,
                    button = saveResult.Exception.Button.ToString()
                }
            };

            // Return 200 (OK). 
            // Important Note: Sencha only accepts status code 200 to recognize a false 'success' property.
            // Using a a different 2xx status code will be considered as success even if the success property is false. 
            HttpResponseMessage httpErrorResponse = Request.CreateResponse(HttpStatusCode.OK, responseData);
            return httpErrorResponse;
        }
    }
}