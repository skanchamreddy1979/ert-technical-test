using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ERT.ApplicationServices.ServiceContracts;
using ERT.Domain;
using ERT.Domain.Repositories;

namespace ERT.ApplicationServices
{
    public class BrewDogServices : IBrewDogBeerService
    {
        private readonly IBrewDogRepository _brewDogRepository;

        public BrewDogServices(IBrewDogRepository userRepository)
        {
            this._brewDogRepository = userRepository;
        }

        public List<Beer> GetAllBeers()
        {
            return _brewDogRepository.GetAllBeers();
        }

        public Task<Fevorite> AddFevorite(Fevorite fevorite)
        {
            if (fevorite != null)
            {
                Fevorite fevoriteData = new Fevorite();
                fevoriteData.AddFevorite(fevorite);
                return _brewDogRepository.AddFevorite(fevoriteData);
            }

            return null;
        }

        public Beer GetBeerById(int beerId)
        {
            return _brewDogRepository.GetBeerById(beerId);
        }

        public Fevorite GetFevoriteById(string fevoriteId)
        {
            return _brewDogRepository.GetFevoriteById(fevoriteId);
        }

        public List<Beer> GetBeersSearchByName(string name)
        {
            return _brewDogRepository.GetBeersSearchByName(name);
        }
    }
}
