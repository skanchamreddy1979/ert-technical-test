using System.Collections.Generic;
using System.Threading.Tasks;

using ert_beer_app.Commands;
using ert_beer_app.Models;
using ert_beer_app.Services.Interfaces;

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

        [HttpPost]
        public async Task<IActionResult> SaveFavourites([FromBody] SaveFavouriteBeersCommand command)
        {
            await _beerService.SaveFavouriteBeersForUser(command);

            return Ok();
        }

        [HttpGet("{userEmail}")]
        public async Task<IActionResult> GetFavourites(string userEmail)
        {
            IEnumerable<Beer> beerList = await _beerService.GetFavouriteBeersForUser(userEmail);

            return Ok(beerList);
        }
    }
}