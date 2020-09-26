using ert_beer_app.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ert_beer_app.Interfaces
{
    public interface IBeerService
    {
        public Task<List<Beer>> GetBeersAsync(GetBeersRequest beerRequest);

        public Task<Beer> GetBeerAsync(long id);
    }
}