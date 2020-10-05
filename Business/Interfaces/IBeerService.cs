using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Business.Models;

namespace ert_beer_app.Business.Interfaces
{
    public interface IBeerService
    {
        Task<IEnumerable<Beer>> GetBeers();
        Task<IEnumerable<Beer>> GetFavoriteBeers();
        Task SetFavoriteBeer(Beer beer);
        Task<Beer> GetBeer(string id);
    }
}
