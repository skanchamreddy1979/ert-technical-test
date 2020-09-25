using System.Collections.Generic;

using ert_beer_app.Controllers;
using ert_beer_app.Models;

namespace ert_beer_app.Commands
{
    public class SaveFavouriteBeersCommand
    {
        public string UserEmail { get; set; }

        public IEnumerable<Beer> ListBeer { get; set; }
    }
}