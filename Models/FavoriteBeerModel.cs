using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class FavoriteBeerModel
    {
        public int Id { get; set; }

        public string EMail { get; set; }

        public int BeerId { get; set; }
    }
}
