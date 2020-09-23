using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using BLL;
using DAL;
using ert_beer_app.ViewModels;

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
            if (beerService == null)
            {
                throw new ArgumentNullException(nameof(beerService));
            }

            _beerService = beerService;
        }

        [Route("user/{userId}")]
        [HttpPost]
        public async Task<IActionResult> AddFavourite(string userId, [FromBody] IList<BeerViewModel> beers)
        {
            await _beerService.AddOrUpdate(beers.Select(x => x.ToBeer()).ToList(), userId);

            return Ok();
        }

        [Route("user/{userId}")]
        [HttpGet]
        public async Task<IActionResult> AddFavourite(string userId)
        {
            ICollection<Beer> beers = await _beerService.GetFavourite(userId);

            return Ok(beers.Select(BeerViewModel.FromBeer).ToList());
        }
    }
}