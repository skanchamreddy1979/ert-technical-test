using System.Collections.Generic;
using System.Threading.Tasks;

using ert_beer_app.Commands;
using ert_beer_app.DataAccess.Interfaces;
using ert_beer_app.Models;
using ert_beer_app.Services.Interfaces;

namespace ert_beer_app.Services
{
    public class BeerService : IBeerService
    {
        private readonly IRepository<Beer> _repository;

        public BeerService(IRepository<Beer> repository)
        {
            _repository = repository;
        }


        public Task<IEnumerable<Beer>> GetFavouriteBeersForUser(string userEmail)
        {
            return _repository.GetAll(userEmail);
        }

        public Task SaveFavouriteBeersForUser(SaveFavouriteBeersCommand command)
        {
            return _repository.Save(command.UserEmail, command.ListBeer);
        }
    }
}
