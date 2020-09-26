using ert_beer_app;
using ert_beer_app.Interfaces;
using ert_beer_app.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BeerUnitTests
{
    [TestClass]
    public class BeerServiceTests
    {
        private IBeerService BeerService { get; }

        public BeerServiceTests()
        {
            var webHost = Microsoft.AspNetCore.WebHost.CreateDefaultBuilder()
                .UseStartup<Startup>()
                .Build();
            BeerService = webHost.Services.GetRequiredService<IBeerService>();
        }

        [TestMethod]
        public void StartupTest()
        {
            Assert.IsNotNull(BeerService);
        }

        [TestMethod]
        public async Task GetBeersAsync_WithNullRequest_ShouldThrow_ArgumentNullException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentNullException>(async () =>
            {
                var result = await BeerService.GetBeersAsync(null);
            });
        }

        [TestMethod]
        public async Task GetBeersAsync_WithNegativePageParam_ShouldThrow_ArgumentOutOfRangeException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeersAsync(new GetBeersRequest
                {
                    Page = -1,
                });
            });
        }

        [TestMethod]
        public async Task GetBeersAsync_WithZeroPageParam_ShouldThrow_ArgumentOutOfRangeException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeersAsync(new GetBeersRequest
                {
                    Page = 0,
                });
            });
        }

        [TestMethod]
        public async Task GetBeersAsync_WithExceededPerPageParam_ShouldThrow_ArgumentOutOfRangeException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeersAsync(new GetBeersRequest
                {
                    PerPage = 100,
                });
            });
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeersAsync(new GetBeersRequest
                {
                    PerPage = -1,
                });
            });
        }

        [TestMethod]
        public async Task GetBeersAsync_WithEmptyRequest_ShouldReturn_List()
        {
            //arrange
            var request = new GetBeersRequest();
            //act
            var result = await BeerService.GetBeersAsync(request);
            //assert
            Assert.IsNotNull(result);
            Assert.AreEqual(25, result.Count);
        }

        [TestMethod]
        public async Task GetBeersAsync_WithNameRequest_ShouldReturn_List()
        {
            //arrange
            var subString = "11";
            var request = new GetBeersRequest
            {
                BeerName = subString,
            };
            //act
            var result = await BeerService.GetBeersAsync(request);
            var item = result.FirstOrDefault();
            var name = item.Name;
            //assert
            Assert.IsNotNull(result);
            Assert.IsNotNull(item);
            Assert.IsNotNull(name);
            StringAssert.Contains(name, subString);
        }

        [TestMethod]
        public async Task GetBeersAsync_WithPageRequest_ShouldReturn_List()
        {
            //arrange
            var page = 2;
            var perPage = 80;
            var request = new GetBeersRequest
            {
                Page = page,
                PerPage = perPage,
            };
            //act
            var result = await BeerService.GetBeersAsync(request);
            //assert
            Assert.IsNotNull(result);
            Assert.AreEqual(perPage, result.Count);
        }

        [TestMethod]
        public async Task GetBeerAsync_WithNegativeParam_ShouldThrow_ArgumentOutOfRangeException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeerAsync(-1);
            });
        }

        [TestMethod]
        public async Task GetBeerAsync_WithZeroParam_ShouldThrow_ArgumentOutOfRangeException()
        {
            await Assert.ThrowsExceptionAsync<ArgumentOutOfRangeException>(async () =>
            {
                var result = await BeerService.GetBeerAsync(0);
            });
        }

        [TestMethod]
        public async Task GetBeerAsync_ShouldReturn_Value()
        {
            //arrange
            var id = 1;
            //act
            var result = await BeerService.GetBeerAsync(id);
            //assert
            Assert.IsNotNull(result);
        }
    }
}
