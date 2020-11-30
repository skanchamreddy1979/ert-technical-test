using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using ERT.Api.Controllers;
using ERT.ApplicationServices.ServiceContracts;
using ERT.Domain;
using Xunit;
using Moq;
using AutoMapper;
using Abp.Domain.Uow;
using ERT.Domain.Repositories;
using Abp.Domain.Repositories;

namespace ERT.Api.Test
{
    public class BrewDogControllerTest : IClassFixture<WebApplicationFactory<Startup>>
    {
        private MockRepository _mockRepository;
        private readonly WebApplicationFactory<Startup> _factory;
        private Mock<IBrewDogBeerService> _mockBbrewDogBeerService;
        private Fevorite _fevorite;
        public BrewDogControllerTest(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
            _mockRepository = new MockRepository(MockBehavior.Strict);
            _mockBbrewDogBeerService = new Mock<IBrewDogBeerService>();
        }

        [Theory(DisplayName = "Get brew dog beers list")]
        [InlineData("/api/brewdogbeer/getallbeers")]
        public async Task GetBrewdogBeers(string url)
        {
            var client = _factory.CreateClient();

            var response = await client.GetAsync(url);

            Assert.Equal("OK", response.StatusCode.ToString());

        }

        [Fact]
        public void GetBrewdogBeer()
        {
            List<Beer> beerList = PrepareTestData();

            _mockBbrewDogBeerService.Setup(x => x.GetAllBeers()).Returns(beerList);


            Assert.Equal(beerList, _mockBbrewDogBeerService.Object.GetAllBeers());
        }

        [Theory(DisplayName = "Add fevorite")]
        [InlineData("/api/brewdogbeer/addfevorite")]
        public async Task AddFevoriteTest(string url)
        {
            //Arrange
            var client = _factory.CreateClient();

            //Act
            var response = await client.PostAsync(url
                , new StringContent(
                    JsonConvert.SerializeObject(new Fevorite()
                    {
                        IsFevorite = true,
                        BeerId = 3
                    }),
                    Encoding.UTF8,
                    "application/json"));

            //Assert
            Assert.Equal("OK", response.StatusCode.ToString());

        }

        public async Task AddFevorite_Test(string url)
        {
            //Arrange
            Fevorite fevorite = new Fevorite()
            {
                IsFevorite = true,
                BeerId = 1
            };

            var repo = new Mock<IBrewDogBeerService>();
            //Act
            var response = _mockBbrewDogBeerService.Setup(a => a.AddFevorite(It.IsAny<Fevorite>())).ReturnsAsync(fevorite);

            //Assert
            Assert.NotNull(response);

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
