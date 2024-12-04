using Autofac;
using Autofac.Integration.WebApi;
using iRely.Common.Ioc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace iRely.MobileBilling
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //EnableCrossDmainAjaxCall();

            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            //ModelBinders.Binders.DefaultBinder = new DevExpress.Web.Mvc.DevExpressEditorsBinder();

            //DevExpress.Web.ASPxWebControl.CallbackError += Application_Error;

            #region Dependency Injection Configuration - Autofac

            // Autofac Configuration
            //var config = GlobalConfiguration.Configuration;
            //var builder = new ContainerBuilder();
            //// Register Api Controller/s
            //builder.RegisterApiControllers(Assembly.GetExecutingAssembly());            
            //// Register Api Web Api Filter/s
            //builder.RegisterWebApiFilterProvider(config);
            //// Register Autofac Modules
            //builder.RegisterModule(new RepositoryModule());
            //builder.RegisterModule(new BusinessLayerModule());
            //builder.RegisterModule(new ValidationModule());
            //// Build IOC Container
            //var container = builder.Build();
            //// Resolve Dependency
            //config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            //var builder2 = new ContainerBuilder();
            //builder2.RegisterControllers(Assembly.GetExecutingAssembly());
            //builder2.RegisterModule(new BusinessLayerModule());
            //builder2.RegisterModule(new RepositoryModule());

            //var container2 = builder2.Build();
            //// Resolve Dependency
            //DependencyResolver.SetResolver(new AutofacDependencyResolver(container2));

            #endregion
        }

        //protected void Application_Error(object sender, EventArgs e)
        //{
        //    Exception exception = System.Web.HttpContext.Current.Server.GetLastError();
        //    //TODO: Handle Exception
        //}

        //private void EnableCrossDmainAjaxCall()
        //{
        //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
        //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //    if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
        //    {
        //        HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
        //        HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
        //        HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
        //        HttpContext.Current.Response.End();
        //    }
        //}


    }
}