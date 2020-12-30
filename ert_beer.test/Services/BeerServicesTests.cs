using ERT.BusinessServices;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Moq.Protected;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ert_beer.test.Services
{
    [TestClass]
    public class BeerServicesTests
    {
        private MockRepository _mockRepository;
        private Mock<IHttpClientFactory> _mockclientFactory;
        private Mock<IConfiguration> _mockconfiguration;
        private Mock<HttpMessageHandler> _mockhandlerMock;

        [TestInitialize]
        public void TestInitialize()
        {
            _mockRepository = new MockRepository(MockBehavior.Strict);
            _mockclientFactory = _mockRepository.Create<IHttpClientFactory>();
            _mockconfiguration = _mockRepository.Create<IConfiguration>();
            _mockhandlerMock = _mockRepository.Create<HttpMessageHandler>();

            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:apiUrl")]).Returns("https://api.punkapi.com/v2/beers?");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:perPage")]).Returns("10");
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:beerName")]).Returns("&beer_name=");
        }
        [TestCleanup]
        public void TestCleanup()
        {
            _mockRepository.VerifyAll();
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
            _mockhandlerMock
               .Protected()
               .Setup<Task<HttpResponseMessage>>(
                  "SendAsync",
                  ItExpr.IsAny<HttpRequestMessage>(),
                  ItExpr.IsAny<CancellationToken>()
               )
               .ReturnsAsync(new HttpResponseMessage()
               {
                   StatusCode = HttpStatusCode.OK,
                   Content = new StringContent("[" +
                  "{'id':1,'Name':'Buzz123','TagLine':'A Real Bitter Experience.','Abv':'4.5','First_Brewed':'09 / 2007'}," +
                  "{'id':2,'Name':'india','TagLine':'A Real Bitter Experience.','Abv':'3.6','First_Brewed':'12 / 2018'} ]",
                   Encoding.UTF8, "application/json"),
               });

            var httpClient = new HttpClient(_mockhandlerMock.Object);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(httpClient);
            var Service = CreateBeerService();

            // ACT
            var actualResult = Service.GetAllBeers(null, 1);

            // ASSERT            
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(actualResult.ToList().Count(), 2);
        }
        [TestMethod]
        public void GetAllBeersDetailsByName()
        {
            //Arrange 
            string beerName = "india";
            _mockhandlerMock
               .Protected()
               .Setup<Task<HttpResponseMessage>>(
                  "SendAsync",
                  ItExpr.IsAny<HttpRequestMessage>(),
                  ItExpr.IsAny<CancellationToken>()
               )
               .ReturnsAsync(new HttpResponseMessage()
               {
                   StatusCode = HttpStatusCode.OK,
                   Content = new StringContent("[" +
                  "{'id':2,'Name':'india','TagLine':'A Real Bitter Experience.','Abv':'3.6','First_Brewed':'12 / 2018'} ]",
                   Encoding.UTF8, "application/json"),
               });

            var httpClient = new HttpClient(_mockhandlerMock.Object);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(httpClient);
            var Service = CreateBeerService();

            // ACT
            var actualResult = Service.GetAllBeers(beerName, 1);

            // ASSERT            
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(actualResult.ToList()[0].Name, beerName);
        }

        [TestMethod]
        public void GetAllBeersDetailsById()
        {
            //Arrange 
            int id = 1;
            _mockhandlerMock
               .Protected()
               .Setup<Task<HttpResponseMessage>>(
                  "SendAsync",
                  ItExpr.IsAny<HttpRequestMessage>(),
                  ItExpr.IsAny<CancellationToken>()
               )
               .ReturnsAsync(new HttpResponseMessage()
               {
                   StatusCode = HttpStatusCode.OK,
                   Content = new StringContent("[" +
                  "{'id':1,'Name':'india','TagLine':'A Real Bitter Experience.','Abv':'3.6','First_Brewed':'12 / 2018'} ]",
                   Encoding.UTF8, "application/json"),
               });

            var httpClient = new HttpClient(_mockhandlerMock.Object);
            _mockclientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(httpClient);

            var Service = CreateBeerService();

            //ACT
            var actualResult = Service.GetBeerById(id);

            // ASSERT           
            Assert.IsNotNull(actualResult);
            Assert.AreEqual(actualResult.ToList()[0].Id, 1);
        }

        [TestMethod]
        public void GetLastPageIndex()
        {
            //Arrange
            string expectedResults = "33";
            _mockconfiguration.SetupGet(x => x[It.Is<string>(s => s == "BeerApi:LastPageIndex")]).Returns(expectedResults);

            // ACT
            var service = CreateBeerService();
            var actualResult = service.GetLastPageIndex();

            //ASSERT
            Assert.IsNotNull(actualResult);
            Assert.IsInstanceOfType(actualResult, typeof(int));
            Assert.AreEqual(actualResult, Convert.ToInt32(expectedResults));
        }
    }

}


