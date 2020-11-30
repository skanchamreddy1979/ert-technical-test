using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper.Configuration;
using ERT.Api.Controllers;
using ERT.ApplicationServices.ServiceContracts;
using ERT.Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using Abp.Domain.Uow;
using AutoMapper;
using ERT.ApplicationServices;
using ERT.Domain.Repositories;

namespace ERT.Api.Test
{
    [TestClass]
    public class BeerServiceTest
    {
        private MockRepository _mockRepository;
        private Mock<IBrewDogRepository> _mockBrewDogRepository;
        private Beer _beer;

        [TestInitialize]
        public void TestInitialize()
        {
            _mockRepository = new MockRepository(MockBehavior.Strict);
            _mockBrewDogRepository = _mockRepository.Create<IBrewDogRepository>();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            _mockRepository.VerifyAll();
        }

        private BrewDogServices CreateService()
        {
            return new BrewDogServices(
                _mockBrewDogRepository.Object);
        }

        [TestMethod]
        public void GetAllBrewdogBeer()
        {
            //Arrange
            List<Beer> beerList = PrepareTestData();

            _mockBrewDogRepository.Setup(x => x.GetAllBeers()).Returns(beerList);

            //Act
            var unitUnderTest = CreateService();
            var result = unitUnderTest.GetAllBeers();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(List<Beer>));
        }

        [TestMethod]
        public void GetBeerById()
        {
            // Arrange
            int beerId = 1;
            Beer beer = new Beer()
            {
                Id = 1,
                Name = "Buzz",
                FirstBrewed = "09/2007",
                Abv = 4.5,
                Description = "desc1",
                ImageUrl = "https://images.punkapi.com/v2/keg.png",
                Tagline = "A Real Bitter Experience."
            };


            _mockBrewDogRepository
                    .Setup(a => a.GetBeerById(It.IsAny<int>()))
                    .Returns(beer);

            // Act
            var unitUnderTest = CreateService();
            var result = unitUnderTest.GetBeerById(beerId);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(Beer));
        }

        [TestMethod]
        public void GetBeerSearchByName()
        {
            // Arrange
            string name = "buzz";
            Beer beer1 = new Beer()
            {
                Id = 1,
                Name = "Buzz",
                FirstBrewed = "09/2007",
                Abv = 4.5,
                Description = "desc1",
                ImageUrl = "https://images.punkapi.com/v2/keg.png",
                Tagline = "A Real Bitter Experience."
            };

            List<Beer> beer = new List<Beer>() { beer1 };

            _mockBrewDogRepository
                .Setup(a => a.GetBeersSearchByName(It.IsAny<string>()))
                .Returns(beer);

            // Act
            var unitUnderTest = CreateService();
            var result = unitUnderTest.GetBeersSearchByName(name);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(List<Beer>));
        }

        [TestMethod]
        public void GetFevoriteById()
        {
            // Arrange
            string fevoriteId = "30-11-2020-55338fae-3517-4e90-b039-b80d23c06bf1";
            Fevorite fevorite = new Fevorite()
            {
                FevoriteId = "30-11-2020-55338fae-3517-4e90-b039-b80d23c06bf1",
                IsFevorite = true,
                BeerId = 3
            };


            _mockBrewDogRepository
                .Setup(a => a.GetFevoriteById(It.IsAny<string>()))
                .Returns(fevorite);

            // Act
            var unitUnderTest = CreateService();
            var result = unitUnderTest.GetFevoriteById(fevoriteId);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(Fevorite));
        }

        [TestMethod]
        public async Task AddFevorite()
        {
            // Arrange
            Fevorite fevorite = new Fevorite()
            {
                IsFevorite = true,
                BeerId = 1
            };
            _mockBrewDogRepository
                .Setup(u => u.AddFevorite(It.IsAny<Fevorite>()))
                .ReturnsAsync(fevorite);


            // Act
            var unitUnderTest = CreateService();
            var result = await unitUnderTest.AddFevorite(fevorite);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(Fevorite));
        }

        private List<Beer> PrepareTestData()
        {
            List<Beer> beerList = new List<Beer>()
            {
                new Beer(){Id = 1,Name = "Buzz", FirstBrewed = "09/2007",Abv = 4.5, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/keg.png",Tagline = "A Real Bitter Experience."},
                new Beer(){Id = 2,Name = "Trashy Blonde", FirstBrewed = "04/2008",Abv = 4.1, Description = "desc2",ImageUrl = "https://images.punkapi.com/v2/2.png",Tagline = "You Know You Should."},
                new Beer(){Id = 3,Name = "Berliner Weisse With Yuzu - B-Sides", FirstBrewed = "11/2015",Abv = 4.2, Description = "desc3",ImageUrl = "https://images.punkapi.com/v2/keg.png",Tagline = "Japanese Citrus Berliner Weisse."},
                new Beer(){Id = 4,Name = "Pilsen Lager", FirstBrewed = "09/2013",Abv = 6.3, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/4.png",Tagline = "Unleash the Yeast Series."},
                new Beer(){Id = 5,Name = "Avery Brown Dredge", FirstBrewed = "02/2011",Abv = 7.2, Description = "desc1",ImageUrl = "https://images.punkapi.com/v2/5.png",Tagline = "Bloggers' Imperial Pilsner."}
            };
            return beerList;

        }
    }
}
