using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Business.Models
{
    public class BeerSearchCriteria
    {
        public string Name { get; set; }
        public int? Skip { get; set; }
        public int? Take { get; set; }
    }
}
