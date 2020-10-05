using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ert_beer_app.Business.Models;
using ert_beer_app.Data.Interfaces;
using ert_beer_app.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace ert_beer_app.Data
{
    public class BrewDogBeerProvider : IBrewDogBeerProvider
    {
        private readonly HttpClient _httpClient;
        private readonly string _brewDogUrl;
        private readonly IBeerContext _beerContext;
        private readonly IUrlFilterBuilder _filterBuilder;
        public BrewDogBeerProvider(IHttpClientFactory clientFactory, IConfiguration configuration, IBeerContext beerContext, IUrlFilterBuilder filterBuilder)
        {
            _beerContext = beerContext;
            _filterBuilder = filterBuilder;
            _brewDogUrl = configuration["BrewDogUrl"];
            _httpClient = clientFactory.CreateClient();
        }

        public async Task<IEnumerable<BrewDogBeer>> GetBeers()
        {
            var beers = await GetBeersFromBrewDog(_brewDogUrl);
            return beers;
        }
        public async Task<IEnumerable<BrewDogBeer>> GetBeersByFilter(BeerSearchCriteria searchCriteria)
        {
            var beers = await GetBeersFromBrewDog(_filterBuilder.AddFilterToUrl(_brewDogUrl, searchCriteria));
            return beers;
        }
        public async Task<BrewDogBeer> GetBeerById(string id)
        {
            var beers = await GetBeersFromBrewDog(_filterBuilder.AddIdToUrl(_brewDogUrl, id));
            return beers.FirstOrDefault();
        }
        public async Task AddFavorite(FavoriteBeer favoriteBeer)
        {
            _beerContext.Favorites.Add(favoriteBeer);
            await _beerContext.SaveChangesAsync();
        }
        public async Task<IEnumerable<BrewDogBeer>> GetFavorites()
        {
            var favoriteIds = await _beerContext.Favorites.ToListAsync();
            var beers = await GetBeersFromBrewDog(_filterBuilder.AddIdsToUrl(_brewDogUrl, favoriteIds.Select(b=>b.BeerId)));
            return beers;
        }
        private async Task<IEnumerable<BrewDogBeer>> GetBeersFromBrewDog(string url)
        {
            var beers = JsonConvert.DeserializeObject<IEnumerable<BrewDogBeer>>(await _httpClient.GetStringAsync(url));
            return beers;
        }

    }
}
