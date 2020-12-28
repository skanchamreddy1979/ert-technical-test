using ERT.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ERT.BusinessServices.Interfaces
{ 
   public interface IBeerService
    {
        IEnumerable<BeerModel> GetAllBeers(string beerName, int pageNumber);
        IEnumerable<BeerModel> GetBeerById(int id);
    }
}