using ert_beer_app.Data;
using ert_beer_app.Model;
using ert_beer_app.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ert_beer_app.Controllers
{
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly IBeerRepository _beerRepository;

        public BeerController(IBeerRepository beerRepository)
        {
            _beerRepository = beerRepository;
        }

        [Route("api/beers")]
        [HttpGet]
        public async Task<IEnumerable<BeerViewModel>> GetAll()
        {
            var result = await _beerRepository.GetAll();
            return result;
        }

        [HttpGet]
        [Route("api/beer/{id}")]
        public async Task<Beer> Get(int id)
        {
            var result = await _beerRepository.Get(id);
            return result;
        }
    }
}