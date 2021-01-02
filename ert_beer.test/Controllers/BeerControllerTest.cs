using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using ert_beer_app.Controllers;
using Microsoft.AspNetCore.Mvc;
using ERT.BusinessServices.Interfaces;
using ERT.Entities;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net;
using System.Threading;
using System;
using System.Linq;

namespace ert_beer.test.Services
{
    [TestClass]
    public class BeerControllerTest
    {
        private MockRepository _mockRepository;
        private Mock<IBeerService> _mockBeerService;
        private IEnumerable<BeerModel> expectedResult = new List<BeerModel>();
        int pagenumber = 1;
        [TestInitialize]
        public void TestInitialize()
        {
            _mockRepository = new MockRepository(MockBehavior.Strict);
            _mockBeerService = _mockRepository.Create<IBeerService>();
            PrepareTestData();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            _mockRepository.VerifyAll();
        }

        private void PrepareTestData()
        {
            expectedResult = new List<BeerModel>(){
                new BeerModel() { Abv="4.5",First_Brewed="09/2007",Id=1, Name="Buzz123",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png" },
                new BeerModel() { Abv="6.2",First_Brewed="09/2008",Id=2, Name="Lakshmi",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="1.8",First_Brewed="09/2009",Id=3, Name="Motueka",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="2.7",First_Brewed="09/2006",Id=4, Name="Munich",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="3.9",First_Brewed="09/2001",Id=5, Name="Buzz",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="4.5",First_Brewed="09/2007",Id=6, Name="Trashy Blonde",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png" },
                new BeerModel() { Abv="6.2",First_Brewed="09/2008",Id=7, Name="Amarillo",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="1.8",First_Brewed="09/2009",Id=8, Name="Motueka",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="2.7",First_Brewed="09/2006",Id=9, Name="Propino Pale Malt",TagLine="A Real Bitter Experience.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/keg.png"},
                new BeerModel() { Abv="6.8",First_Brewed="09/2013",Id=210, Name="Dead Metaphor",TagLine="Scottish Breakfast Stout.",checkboxAnswer=false,image_url="https://images.punkapi.com/v2/210.png"}
            };
        }
        private BeerController CreateBeerController()
        {
            return new BeerController(_mockBeerService.Object);
        }

        [TestMethod]
        public void GeAllBeers_WhenFetchingAllBeers_ThenReturnAllBeers()
        {
            //Arrange 
            int lastPage = 33;

            _mockBeerService.Setup(beerService => beerService.GetAllBeers(It.IsAny<string>(), It.IsAny<int>()))
                .Returns(expectedResult);

            _mockBeerService.Setup(beerService => beerService.GetLastPageIndex())
               .Returns(lastPage);

            //ACT
            var Service = CreateBeerController();
            var actualResult = Service.GetAllBeers(null, pagenumber);
            var model = (List<BeerModel>)((ViewResult)actualResult).Model;

            //ASSERT
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(expectedResult.ToList().Count(), model.Count);
        }

        [TestMethod]
        public void GeAllBeers_WhenSearchingAllBeersByName_ThenReturnAllBeers()
        {
            //Arrange           
            int lastPage = 33; string name = "Buzz"; var expectedResults = from list in expectedResult where list.Name.Contains(name) select list;

            _mockBeerService.Setup(beerService => beerService.GetAllBeers(It.IsAny<string>(), It.IsAny<int>()))
                .Returns(expectedResults);
            _mockBeerService.Setup(beerService => beerService.GetLastPageIndex())
               .Returns(lastPage);
           
            //ACT
            var Service = CreateBeerController();
            var actualResult = Service.GetAllBeers(name, pagenumber);
            var model = (List<BeerModel>)((ViewResult)actualResult).Model;

            //ASSERT
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(expectedResults.ToList().Count(), model.Count);
        }

        [TestMethod]
        public void GetBeerDetails_WhenFetchingBeerDetailsByBeerId_ThenReturnBeerDetails()
        {
            //Arrange            
            int id = 210;
            var expectedResults = from list in expectedResult where list.Id == id select list;
            var ControllerService = CreateBeerController();

            _mockBeerService.Setup(beerService => beerService.GetBeerById(It.IsAny<int>()))
                .Returns(expectedResults).Verifiable();

            //ACT
            var actualResult = ControllerService.GetBeerDetailsById(id);
            var model = (BeerModel)((ViewResult)actualResult).Model;

            //ASSERT
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(expectedResults.ToList()[0].Id, model.Id);
        }

    }
}


