using Application;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        [HttpGet]
        public IEnumerable<BeerViewModel> GetAll()
        {
            var result = _beerService.GetAll();
            return result;
        }

        [HttpGet]
        [Route("api/beer/{id}")]
        public Beer Get(int id)
        {
            var result = _beerService.Get(id);
            return result;
        }

        [HttpGet]
        [Route("api/favorites/{email}")]
        public IEnumerable<BeerViewModel> GetFavorites(string email)
        {
            var result = _beerService.GetFavorites(email);
            return result;
        }

        [HttpPost]
        [Route("api/favorites")]
        public void AddFavorites(IEnumerable<int> ids, string email)
        {
            _beerService.AddFavorites(ids, email);
        }
    }
}