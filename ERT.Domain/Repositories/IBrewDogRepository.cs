using ERT.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ERT.Domain.Repositories
{
    public interface IBrewDogRepository
    {
        List<Beer> GetAllBeers();

        Beer GetBeerById(int beerId);

        List<Beer> GetBeersSearchByName(string name);

        Task<Fevorite> AddFevorite(Fevorite fevorite);

        Fevorite GetFevoriteById(string fevoriteId);
    }
}
