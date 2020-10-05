using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Business.Interfaces;
using ert_beer_app.Business.Models;
using ert_beer_app.Data.Interfaces;
using ert_beer_app.Data.Models;
using ert_beer_app.Business.Mapping;


namespace ert_beer_app.Business
{
    public class BeerService : IBeerService
    {
        private readonly IBrewDogBeerProvider _beerProvider;

        public BeerService(IBrewDogBeerProvider beerProvider)
        {
            _beerProvider = beerProvider;
        }

        public async Task<IEnumerable<Beer>> GetBeers()
        {
            var beers = await _beerProvider.GetBeers();

            return beers.MapToBusiness().ToList();
        }

        public async Task<IEnumerable<Beer>> GetBeersByFilter()
        {
            var beers = await _beerProvider.GetBeers();

            return beers.MapToBusiness().ToList();
        }
        public async Task<Beer> GetBeer(string id)
        {
            var beer = await _beerProvider.GetBeerById(id);
            var favorites = await _beerProvider.GetFavorites();
            var businessBeer= beer.MapToBusiness();
            businessBeer.IsFavorite = favorites.Any(b => b.Id == beer.Id);
            return businessBeer;
        }

        public async Task<IEnumerable<Beer>> GetFavoriteBeers()
        {
            var beers = await _beerProvider.GetFavorites();
            return beers.MapToBusiness().ToList();
        }
        public async Task SetFavoriteBeer(Beer beer)
        {
            await _beerProvider.AddFavorite(beer.MapToFavorite());
        }
    }
}
