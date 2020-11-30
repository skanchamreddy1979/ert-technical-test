using System;
using System.Collections.Generic;
using System.Text;

namespace ERT.Common
{
    public static class GuidExtention
    {
        public static string GenerateGuid(this string guid)
        {
            // based on date generating guid
            Guid _guid = Guid.NewGuid();
            guid = DateTime.Now.Date.ToString("dd-MM-yyyy") + "-" + _guid.ToString();

            return guid;
        }
    }
}
