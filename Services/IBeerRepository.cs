using System.Collections.Generic;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
   public interface IBeerRepository
    {
        Task<IEnumerable<BeerModel>> AllBeers(string beerName,int pageNumber);
        IList<BeerModel> GetBeerByEmail(string Email);
        void SaveBeer(BeerModel beer);           

    }
}
