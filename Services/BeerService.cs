using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ert_beer_app.Commands;
using ert_beer_app.DataAccess;
using ert_beer_app.Models;
using ert_beer_app.Services.Interfaces;

using Microsoft.EntityFrameworkCore;

namespace ert_beer_app.Services
{
    public class BeerService : IBeerService
    {
        private readonly BeerContext _beerContext;

        public BeerService(BeerContext beerContext)
        {
            _beerContext = beerContext;
        }

        public async Task<IEnumerable<Beer>> GetFavouriteBeersForUserAsync(string userEmail)
        {
            User user = await _beerContext.Users
                                          .Include(u => u.Favourites)
                                          .ThenInclude(b => b.Beer)
                                          .FirstOrDefaultAsync(u => u.UserEmail.ToUpper().Equals(userEmail.ToUpper()));

            return user != null && user?.Favourites?.Any() == true ? user.Favourites.Select(u => u.Beer) : new List<Beer>();
        }

        public async Task SaveFavouriteBeersForUserAsync(SaveFavouriteBeersCommand command)
        {
            var user = await CreateUserIfNotExistsAsync(command.UserEmail);

            await AddNotExistedBeerAsync(command.ListBeer);
            await RewriteFavouritesForUserAsync(user, command.ListBeer);
        }

        private async Task<User> CreateUserIfNotExistsAsync(string email)
        {
            User user = await _beerContext.Users.FirstOrDefaultAsync(u => u.UserEmail.ToUpper().Equals(email.ToUpper()));

            if (user == null)
            {
                user = new User {UserEmail = email};
                await _beerContext.Users.AddAsync(user);

                await _beerContext.SaveChangesAsync();
            }

            return user;
        }

        private async Task RewriteFavouritesForUserAsync(User user, IEnumerable<Beer> beerList)
        {
            var oldRecords = _beerContext.UserFavourites.Where(u => u.UserId == user.UserId);
            
            if (await oldRecords.AnyAsync())
            {
                _beerContext.UserFavourites.RemoveRange(oldRecords);
                await _beerContext.SaveChangesAsync();
            }

            foreach (var beer in beerList)
            {
                await _beerContext.UserFavourites.AddAsync(new UserFavourite { BeerId = beer.BeerId, UserId = user.UserId});
            }

            await _beerContext.SaveChangesAsync();
        }

        private async Task AddNotExistedBeerAsync(IEnumerable<Beer> beerList)
        {
            var existedBeers = _beerContext.Beers.Where(b => beerList.Select(c => c.BeerId).Contains(b.BeerId));
            var newBeerList = beerList.Where(b => !existedBeers.Select(c => c.BeerId).Contains(b.BeerId));

            if (newBeerList.Any())
            {
                await _beerContext.Beers.AddRangeAsync(newBeerList);

                await _beerContext.SaveChangesAsync();
            }
        }
    }
}
