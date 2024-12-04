using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace iRely.MobileBilling.WebApi.Helper_Classes
{
    public class createFile
    {
        public class Child
        {
            public string text { get; set; }
            public string icon { get; set; }
            public string link { get; set; }
            public List<createFile.Child> children { get; set; }
        }

        public Child create(string path, string filename)
        {
            var app = System.AppDomain.CurrentDomain.BaseDirectory.LastIndexOf("\\", System.AppDomain.CurrentDomain.BaseDirectory.Length - 3);
            var _newpath = ".." + path.Substring(app, path.Length - app);

            var js = new Child();
            js.text = filename;
            js.icon = "fa fa-file-text-o";
            js.link = _newpath + "\\" + filename;    //jsFile.link = parent.text + "/test-ui/" + child.text + "/" + name;

            return js;
        }
    }
}