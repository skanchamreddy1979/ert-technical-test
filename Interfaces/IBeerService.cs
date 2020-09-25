using ert_beer_app.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Interfaces
{
    public interface IBeerService
    {
        List<Beer> GetBeers(BeerByName beerByName);

        List<Beer> GetBeersByEmail(string email);

        BeerDetail GetBeerById(string id);

        void SaveBeersByEmail(SaveBeer saveBeer);
    }
}
