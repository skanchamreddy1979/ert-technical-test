using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ert_beer_app.Handlers;
using ert_beer_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : Controller
    {
        private BeersHandler _beersHandler;

        public BeerController(BeersHandler beersHandler)
        {
            _beersHandler = beersHandler;
        }

        [HttpPost]
        public async Task<IActionResult> SetFavoriteBeers([FromForm]FavoriteBeerRequest request)
        {
            await _beersHandler.SetFavoriteBeers(request);
            return Ok();
        }

        [HttpGet]
        public async Task<int[]> GetFavoriteBeers([FromQuery] string email)
        {
            return await _beersHandler.GetFavoriteBeers(email);
        }
    }
}