using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ert_beer_app.Models;
using ert_beer_app.Data;

namespace ert_beer_app.Services
{
    public class BeerEFService : IBeerService
    {
        private readonly BeerDBContext beerDBContext;
        private readonly ILogger<BeerEFService> logger;

        public BeerEFService(BeerDBContext beerContext, ILogger<BeerEFService> logger)
        {
            this.logger = logger;
            beerDBContext = beerContext;
        }

        public IList<BeerModel> GetBeers()
        {
            return beerDBContext.Beers.ToList();
        }
        public void SaveBeer(BeerModel beer)
        {
            if (beer.Id > 0)
            {
                var beerFromDb = beerDBContext.Beers.AsNoTracking().Any(x => x.Id == beer.Id);
                if (beerFromDb)
                {
                    beer.ModifiedDate = DateTime.UtcNow;
                    beerDBContext.Beers.Update(beer);
                }
                else
                {
                    beer.Id = 0;
                }
            }
            if (beer.Id == 0)
            {
                beer.CreatedDate = beer.ModifiedDate = DateTime.UtcNow;
                beerDBContext.Beers.Add(beer);
            }
            beerDBContext.SaveChanges();
        }

        public BeerModel GetBeerById(int beerID)
        {            
            return beerDBContext.Beers.FirstOrDefault(p => p.Id == beerID);
        }
    }
}
