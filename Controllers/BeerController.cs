using System.Collections.Generic;
using ert_beer_app.Services;
using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly IStorageService _storageService;

        public BeerController(IStorageService storageService)
        {
            _storageService = storageService;
        }

        [HttpPost]
        public void AddToFavorite([FromBody] int id)
        {
            _storageService.AddToFavorites(id);
        }

        [HttpGet]
        public IEnumerable<int> GetFavorites()
        {
            return _storageService.GetFavorites();
        }
    }
}