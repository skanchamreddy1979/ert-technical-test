using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class BrewDog
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string TagLine { get; set; }
        public string First_Brewed { get; set; }
        public string Description { get; set; }
        public string? Image_Url { get; set; }
        public double? ABV { get; set; }

    }
}
