using ert_beer_app.Interfaces;
using ert_beer_app.Models;

using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;

namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : Controller
    {
        private readonly IBeerService _beerService;

        public BeerController(IBeerService beerService)
        {
            _beerService = beerService;
            _beerService.PopulateProductsCollection();
        }

        public IEnumerable<Beer> Get()
        {
            return _beerService.GetAllBeerProducts();
        }

        [Route("details")]
        [HttpGet]
        public Beer GetBeerDetailsId(string id)
        {
            try
            {
                var result = _beerService.GetBeerById(id);

                return result;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}