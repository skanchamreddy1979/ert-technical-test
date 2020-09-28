using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ert_beer_app.Commands;
using ert_beer_app.DataAccess;
using ert_beer_app.Models;
using ert_beer_app.Services;
using ert_beer_app.Services.Interfaces;

using Microsoft.EntityFrameworkCore;

using Xunit;

namespace tests.Services
{
    public class BeerServiceTests : IClassFixture<TestFixture>
    {
        private readonly BeerContext _beerContext;
        private readonly IBeerService _beerService;

        public BeerServiceTests(TestFixture testFixture)
        {
            _beerContext = testFixture.BeerContext;
            _beerService = new BeerService(_beerContext);
        }

        [Fact]
        public async Task SaveFavouritesForUser_WhenCorrectCommand_ShouldSaveFavourites()
        {
            var command = new SaveFavouriteBeersCommand
                          {
                              UserEmail = "test@email.com",
                              ListBeer = new List<Beer> { TestBeer }
                          };

            await _beerService.SaveFavouriteBeersForUserAsync(command);

            User user = await _beerContext.Users
                                          .Include(c => c.Favourites)
                                          .ThenInclude(f => f.Beer)
                                          .FirstOrDefaultAsync(f => f.UserEmail.Equals(command.UserEmail));

            Assert.Equal(command.ListBeer.Count(), user.Favourites.Count());
            Assert.Contains(user.Favourites, f => f.Beer.BeerId == TestBeer.BeerId);
        }

        private Beer TestBeer => new Beer {BeerId = 1, Name = "test beer", Abv = 2.3, Description = "Test descr"};
    }
}
