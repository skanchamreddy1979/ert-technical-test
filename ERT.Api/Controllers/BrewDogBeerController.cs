using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ERT.ApplicationServices.ServiceContracts;
using ERT.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ERT.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BrewDogBeerController : ControllerBase
    {
        private readonly IBrewDogBeerService _brewDogBeerService;

        public BrewDogBeerController(IBrewDogBeerService brewDogBeerService)
        {
            this._brewDogBeerService = brewDogBeerService;
        }

        [HttpGet]
        [ActionName("GetAllBeers")]
        public List<Beer> GetAllBeers()
        {
            return _brewDogBeerService.GetAllBeers();
        }

        [HttpGet]
        [ActionName("GetBeersSearchByName")]
        public List<Beer> GetBeersSearchByName(string name)
        {
            return _brewDogBeerService.GetBeersSearchByName(name);
        }

        [HttpGet]
        [ActionName("GetBeerById")]
        public Beer GetBeerById(int beerId)
        {
            return _brewDogBeerService.GetBeerById(beerId);
        }

        [HttpPost]
        [ActionName("AddFevorite")]
        public async Task<ActionResult<Fevorite>> AddFevorite(Fevorite fevorite)
        {
            if (ModelState.IsValid)
            {
                Fevorite fevorites = await _brewDogBeerService.AddFevorite(fevorite);
                return fevorites;
            }

            return BadRequest("Invalid data");

        }

        [HttpGet]
        [ActionName("GetFevoriteById")]
        public Fevorite GetFevoriteById(string fevoriteId)
        {
            return _brewDogBeerService.GetFevoriteById(fevoriteId);
        }
    }
}