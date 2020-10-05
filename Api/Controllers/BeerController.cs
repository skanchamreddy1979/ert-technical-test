using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Api.Mapping;
using ert_beer_app.Api.Models;
using ert_beer_app.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly IBeerService _beerService;

        public BeerController(IBeerService beerService)
        {
            _beerService = beerService;
        }
        [HttpGet("")]
        public async Task<IEnumerable<BeerApi>> GetBeers()
        {
            var beers = await _beerService.GetBeers();
            var res = beers.MapToApi().ToList();
            return res;
        }
        [HttpGet("{id}")]
        public async Task<BeerApi> GetBeerById(int id)
        {
            var beer = await _beerService.GetBeer(id.ToString());
            return beer.MapToApi();
        }
        [HttpGet("Favorites")]
        public async Task<IEnumerable<BeerApi>> GetFavorites()
        {
            var beers = await _beerService.GetFavoriteBeers();
            var res = beers.MapToApi().ToList();
            return res;
        }
        [HttpPost("Favorites")]
        public async Task SetFavorite(BeerApi beer)
        {
            await _beerService.SetFavoriteBeer(beer.MapToBusiness());
        }
    }
}