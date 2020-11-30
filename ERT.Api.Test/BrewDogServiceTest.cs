using ERT.ApplicationServices.ServiceContracts;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using ERT.Domain;
using Xunit;

namespace ERT.Api.Test
{
    public class BrewDogServiceTest
    {
        private Mock<IBrewDogBeerService> _mockBbrewDogBeerService;

       
        public BrewDogServiceTest()
        {
            _mockBbrewDogBeerService = new Mock<IBrewDogBeerService>();
        }

        [Fact]
        public void GetBrewdogBeer()
        {
            //Arrange
            List<Beer> beerList = PrepareTestData();
            //Act
            _mockBbrewDogBeerService.Setup(x => x.GetAllBeers()).Returns(beerList);

            //Assert
            Assert.Equal(beerList, _mockBbrewDogBeerService.Object.GetAllBeers());
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
