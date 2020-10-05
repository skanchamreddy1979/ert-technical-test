using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Business.Models;
using ert_beer_app.Data.Models;

namespace ert_beer_app.Data.Interfaces
{
    public interface IBrewDogBeerProvider
    {
        Task<IEnumerable<BrewDogBeer>> GetBeers();
        Task<IEnumerable<BrewDogBeer>> GetBeersByFilter(BeerSearchCriteria searchCriteria);
        Task AddFavorite(FavoriteBeer favoriteBeer);
        Task<IEnumerable<BrewDogBeer>> GetFavorites();
        Task<BrewDogBeer> GetBeerById(string id);


    }
}
