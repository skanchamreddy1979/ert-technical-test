using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using ERT.BusinessServices;
using ERT.Entities;
using Moq.Protected;
using System.Threading;
using System.Net;
using System;
using System.Web.Http;
using System.Linq;


namespace ert_beer.test.Services
{
    [TestClass]
    public class BeerServicesTests
    {
        private MockRepository _mockRepository;
        private Mock<IHttpClientFactory> _mockclientFactory;
        private Mock<IConfiguration> _mockconfiguration;
        private IEnumerable<BeerModel> expectedResult = new List<BeerModel>();

        [TestInitialize]
        public void TestInitialize()
        {
            _mockRepository = new MockRepository(MockBehavior.Strict);
            _mockclientFactory = _mockRepository.Create<IHttpClientFactory>();
            _mockconfiguration = _mockRepository.Create<IConfiguration>();
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
        private BeerService CreateBeerService()
        {
            return new BeerService(
                _mockclientFactory.Object,
                _mockconfiguration.Object
                );
        }
        [TestMethod]
        public void GetAllBeersDetails()
        {
            //Arrange            
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:apiUrl")]).Returns("https://api.punkapi.com/v2/beers?");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:perPage")]).Returns("10");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:beerName")]).Returns("");
            var configuration = new HttpConfiguration();
            var request = new HttpRequestMessage();
            request.SetConfiguration(configuration);

            var clientHandlerMock = new Mock<DelegatingHandler>();
            clientHandlerMock.Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage(HttpStatusCode.OK))
                .Verifiable();
            clientHandlerMock.As<IDisposable>().Setup(s => s.Dispose());

            var httpClient = new HttpClient(clientHandlerMock.Object);

            var clientFactoryMock = new Mock<IHttpClientFactory>(MockBehavior.Strict);
            var clientHandlerStub = new DelegatingHandlerStub((request, cancellationToken) =>
            {
                request.SetConfiguration(configuration);
                var response = request.CreateResponse(expectedResult);
                return Task.FromResult(response);
            });
            var client = new HttpClient(clientHandlerStub);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(client).Verifiable();

            //Act
            var service = CreateBeerService();
            var actualResult = service.GetAllBeers(null, 1);

            //Assert
            Assert.IsNotNull(actualResult);
            Assert.IsInstanceOfType(actualResult, typeof(List<BeerModel>));
            Assert.AreEqual(actualResult.ToList().Count(), expectedResult.ToList().Count());
        }
        [TestMethod]
        public void GetAllBeersDetailsByName()
        {
            //Arrange             
            var expectedResults = from list in expectedResult where list.Name == "Motueka" select list;

            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:apiUrl")]).Returns("https://api.punkapi.com/v2/beers?");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:perPage")]).Returns("10");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:beerName")]).Returns("Buzz");

            var configuration = new HttpConfiguration();
            var request = new HttpRequestMessage();
            request.SetConfiguration(configuration);

            var clientHandlerMock = new Mock<DelegatingHandler>();
            clientHandlerMock.Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage(HttpStatusCode.OK))
                .Verifiable();
            clientHandlerMock.As<IDisposable>().Setup(s => s.Dispose());

            var httpClient = new HttpClient(clientHandlerMock.Object);

            var clientFactoryMock = new Mock<IHttpClientFactory>(MockBehavior.Strict);
            var clientHandlerStub = new DelegatingHandlerStub((request, cancellationToken) =>
            {
                request.SetConfiguration(configuration);
                var response = request.CreateResponse(expectedResults);
                return Task.FromResult(response);
            });
            var client = new HttpClient(clientHandlerStub);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(client).Verifiable();

            //Act
            var service = CreateBeerService();
            var actualResult = service.GetAllBeers(null, 1);

            //Assert
            Assert.IsNotNull(actualResult);
            Assert.IsInstanceOfType(actualResult, typeof(List<BeerModel>));
            Assert.AreEqual(actualResult.ToList().Count(), expectedResults.ToList().Count());
        }

        [TestMethod]
        public void GetAllBeersDetailsById()
        {
            //Arrange              
            int id = 210;
            var expectedResults = from list in expectedResult where list.Id == id select list;

            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:apiUrl")]).Returns("https://api.punkapi.com/v2/beers?");

            var configuration = new HttpConfiguration();
            var request = new HttpRequestMessage();
            request.SetConfiguration(configuration);

            var clientHandlerMock = new Mock<DelegatingHandler>();
            clientHandlerMock.Protected()
                .Setup<Task<HttpResponseMessage>>("SendAsync", ItExpr.IsAny<HttpRequestMessage>(), ItExpr.IsAny<CancellationToken>())
                .ReturnsAsync(new HttpResponseMessage(HttpStatusCode.OK))
                .Verifiable();
            clientHandlerMock.As<IDisposable>().Setup(s => s.Dispose());

            var httpClient = new HttpClient(clientHandlerMock.Object);

            var clientFactoryMock = new Mock<IHttpClientFactory>(MockBehavior.Strict);
            var clientHandlerStub = new DelegatingHandlerStub((request, cancellationToken) =>
            {
                request.SetConfiguration(configuration);
                var response = request.CreateResponse(expectedResults);
                return Task.FromResult(response);
            });
            var client = new HttpClient(clientHandlerStub);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(client).Verifiable();

            //Act
            var service = CreateBeerService();
            var actualResult = service.GetBeerById(id);

            //Assert
            Assert.IsNotNull(actualResult);
            Assert.IsInstanceOfType(actualResult, typeof(List<BeerModel>));
            Assert.AreEqual(actualResult.ToList()[0].Id, expectedResults.ToList()[0].Id);
        }

         [TestMethod]
        public void GetLastPageIndex()
        {
            //Arrange              
            
            string expectedResults = "33";

            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:LastPageIndex")]).Returns(expectedResults);           

            //Act
            var service = CreateBeerService();
            var actualResult = service.GetLastPageIndex();

            //Assert
            Assert.IsNotNull(actualResult);
            Assert.IsInstanceOfType(actualResult, typeof(int));
            Assert.AreEqual(actualResult,Convert.ToInt32(expectedResults));
        }

        public class DelegatingHandlerStub : DelegatingHandler
        {
            private readonly Func<HttpRequestMessage, CancellationToken, Task<HttpResponseMessage>> _handlerFunc;
            public DelegatingHandlerStub()
            {
                _handlerFunc = (request, cancellationToken) => Task.FromResult(request.CreateResponse(HttpStatusCode.OK));
            }

            public DelegatingHandlerStub(Func<HttpRequestMessage, CancellationToken, Task<HttpResponseMessage>> handlerFunc)
            {
                _handlerFunc = handlerFunc;
            }

            protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
            {
                return _handlerFunc(request, cancellationToken);
            }
        }

    }

}


