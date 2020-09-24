using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class FavoriteBeerRequest
    {
        public string EMail { get; set; }

        public string[] BeerIds { get; set; }
    }
}
