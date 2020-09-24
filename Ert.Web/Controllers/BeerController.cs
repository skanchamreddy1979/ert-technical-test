using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Ert.BusinessLogicLayer;
using Ert.DataAccessLayer;
using Ert.Web.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace Ert.Web.Controllers
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
        public async Task<IActionResult> AddFavourites(string userId, [FromBody] IList<BeerViewModel> beers)
        {
            await _beerService.AddOrUpdate(beers.Select(x => x.ToBeer()).ToList(), userId);

            return Ok();
        }

        [Route("user/{userId}")]
        [HttpGet]
        public async Task<IActionResult> GetFavourites(string userId)
        {
            ICollection<Beer> beers = await _beerService.GetFavourites(userId);

            return Ok(beers.Select(BeerViewModel.FromBeer).ToList());
        }
    }
}