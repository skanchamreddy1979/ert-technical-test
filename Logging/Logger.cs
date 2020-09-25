using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Logging
{
    public static class Logger
    {
        public static void Message(string message) 
        {
            // some repo for logging
        }
        public static void Error(string message, Exception exception)
        {
            // some repo for logging marked Error
        }
    }
}
