using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace iRely.MobileBilling.WebApi.Helper_Classes
{
    public class createFolder
    {

        public createFile.Child create(string path)
        {
            var child = new createFile.Child();
            child.text = new DirectoryInfo(path).Name;

            var files = new List<createFile.Child>();
            foreach (string screenFolder in Directory.GetFiles(path, "*.js"))
            {
                var name = new DirectoryInfo(screenFolder).Name;
                createFile.Child jsFile = new createFile().create(path, name);

                files.Add(jsFile);
            }

            child.children = files;
            child.icon = "fa fa-folder";

            if (Directory.GetFiles(path, "*.js").Length < 0) child.text = "No File";

            return child;
        }

    }
}