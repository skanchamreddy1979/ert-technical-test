using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Models;

namespace ert_beer_app.Services
{
    public interface IBeerService
    {
        BeerModel GetBeerById(int beerID); 
        IList<BeerModel> GetBeers();       
        void SaveBeer(BeerModel beer);        
        
    }
}
