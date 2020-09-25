using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ert_beer_app.Interfaces;
using ert_beer_app.Logging;
using ert_beer_app.Mappers;
using ert_beer_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
namespace ert_beer_app.Controllers
{
    [Route("api/beer")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly IBeerService BeerService;
        public BeerController(IBeerService httpClient)
        {
            BeerService = httpClient;
        }
       
        [Route("get")]
        [HttpGet]
        public List<Beer> GetBeer(string beerName, int page, int take)
        {
            try
            {
                var beer = BeerModelMapper.ConvertParamsToBeerByName(beerName, page, take);
                var context = new ValidationContext(beer);
                var results = new List<ValidationResult>();
                if (!Validator.TryValidateObject(beer, context, results, false))
                {
                    throw new Exception(results.First().ErrorMessage);
                }
                var result = BeerService.GetBeers(beer);

                return result;
            }
            catch (Exception e)
            {
                Logger.Error("GetBeer", e);
                throw e;
            }
           
        }

        [Route("getById")]
        [HttpGet]
        public BeerDetail GetBeerById(string id)
        {
            try
            {
                var result = BeerService.GetBeerById(id);

                return result;
            }
            catch (Exception e)
            {
                Logger.Error("GetBeerById", e);
                throw e;
            }


        }
        [Route("Save")]
        [HttpPut]
        public void SaveBeers(SaveBeer SaveBeer)
        {
            try
            {
                BeerService.SaveBeersByEmail(SaveBeer);
            }
            catch (Exception e)
            {
                Logger.Error("SaveBeers", e);
                throw e;
            }


        }
        [Route("getByEmail")]
        [HttpGet]
        public List<Beer> GetBeerByEmail(string email)
        {
            try
            {
                var result = BeerService.GetBeersByEmail(email);

                return result;
            }
            catch (Exception e)
            {
                Logger.Error("GetBeerByEmail", e);
                throw e;
            }

        }


    }
}