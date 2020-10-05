using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Data.Models
{
    public class BrewDogBeer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image_url { get; set; }
        public string TagLine { get; set; }
        public string Abv { get; set; }
        public string Description { get; set; }

    }
}
