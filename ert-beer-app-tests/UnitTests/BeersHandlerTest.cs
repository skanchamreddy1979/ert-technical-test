using ert_beer_app.DataAccess;
using ert_beer_app.Handlers;
using ert_beer_app.Models;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace ert_beer_app_tests
{
    public class BeersHandlerTest : IClassFixture<TestFixture>
    {
        private IServiceProvider _serviceProvider;
        private BeersHandler _beersHandler;

        public BeersHandlerTest(TestFixture fixture)
        {
            _serviceProvider = fixture.ServiceProvider;
            _beersHandler = _serviceProvider.GetService<BeersHandler>();
        }

        [Fact]
        public async Task SaveFavoriteBeers_WhenProvidedCorrectRequest_ShouldSaveBeersToDatabaseAsync()
        {
            // Arrange
            var request = new FavoriteBeerRequest { EMail = "testMail", BeerIds = new string[] { "1", "2", "3" } };

            var mockBeerRepository = new Mock<BeerDbContext>();

            var expectedBeers = new List<FavoriteBeerModel>
            {
                new FavoriteBeerModel { EMail = "testMail", BeerId = 1 },
                new FavoriteBeerModel { EMail = "testMail", BeerId = 2 },
                new FavoriteBeerModel { EMail = "testMail", BeerId = 3 },
            };

            // Act
            await _beersHandler.SaveFavoriteBeers(request);

            // Assert
            mockBeerRepository.Verify(m => m.FavoriteBeers.AddRange(It.Is<List<FavoriteBeerModel>>(t => expectedBeers.Equals(t))));
        }
    }
}
