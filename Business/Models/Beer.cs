using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Business.Models
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string TagLine { get; set; }
        public string Abv { get; set; }
        public string Description { get; set; }
        public bool IsFavorite { get; set; }
    }
}
