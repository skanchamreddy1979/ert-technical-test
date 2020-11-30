using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ERT.Domain;

namespace ERT.ApplicationServices.ServiceContracts
{
    public interface IBrewDogBeerService
    {
        List<Beer> GetAllBeers();

        Beer GetBeerById(int beerId);

        List<Beer> GetBeersSearchByName(string name);

        Task<Fevorite> AddFevorite(Fevorite fevorite);

        Fevorite GetFevoriteById(string fevoriteId);
    }
}
