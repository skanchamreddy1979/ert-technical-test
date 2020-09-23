using System;
using System.Collections.Generic;

using DAL;

using Moq;

using NUnit.Framework;

namespace BLL.Tests
{
    [TestFixture]
    public class BeerServiceTests
    {
        private const string TEST_USER_ID = "testId";

        #region Constructor Tests

        [Test]
        public void GivenBeerService_WhenBeerRepositoryParameterIsNull_ThenShouldThrowException()
        {
            // Arrange
            // Act and Assert
            Assert.That(() => new BeerService(null), 
                Throws.TypeOf<ArgumentNullException>().And.Message.Contains("beerRepository"));
        }

        #endregion

        [Test]
        public void GivenBeerService_WhenAddOrUpdateAndBeerListIsInvalid_ThenShouldThrowException()
        {
            // Arrange
            IBeerRepository beerRepository = MockBeerRepository();
            var sut = new BeerService(beerRepository);

            // Act and Assert
            Assert.ThrowsAsync<ArgumentNullException>(async () => await sut.AddOrUpdate(null, TEST_USER_ID));
        }

        [TestCase(null)]
        [TestCase("")]
        [TestCase(" ")]
        public void GivenBeerService_WhenAddOrUpdateAndUserIdIsInvalid_ThenShouldThrowException(string userId)
        {
            // Arrange
            IBeerRepository beerRepository = MockBeerRepository();
            var sut = new BeerService(beerRepository);

            // Act and Assert
            Assert.ThrowsAsync<ArgumentException>(async () => await sut.AddOrUpdate(GetBeerList(), userId));
        }

        [Test]
        public void GivenBeerService_WhenAddOrUpdate_ThenShouldFinishSuccessfully()
        {
            // Arrange
            IBeerRepository beerRepository = MockBeerRepository();
            var sut = new BeerService(beerRepository);

            // Act and Assert
            Assert.DoesNotThrowAsync(async () => await sut.AddOrUpdate(GetBeerList(), TEST_USER_ID));
        }

        #region Test Helpers

        private static IBeerRepository MockBeerRepository()
        {
            var mock = new Mock<IBeerRepository>();

            return mock.Object;
        }

        private static ICollection<Beer> GetBeerList() => new List<Beer>
        {
            GetBeer(),
            GetBeer(),
            GetBeer()
        };

        private static Beer GetBeer()
        {
            var rnd = new Random();

            return new Beer
            {
                Id = rnd.Next(1, 100),
                Name = "test",
                Description = "test desc",
                Abv = rnd.NextDouble(),
                BrewDate = DateTime.Now,
                ImageUrl = "url",
                TagLine = "tagline"
            };
        }

        #endregion
    }
}
