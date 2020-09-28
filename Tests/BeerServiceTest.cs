using ert_beer_app.Interfaces;
using ert_beer_app.Models;
using ert_beer_app.Services;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Tests
{
    public class BeerServiceTest
    {
        private  BeerService _service;

        BeerServiceTest(BeerService service)
        {
            _service = service;
        }
        [Test]
        public void TestGetBeers()
        {
          var result = _service.GetBeers(new Models.BeerByName() { page = 1, take = 10 });

            Assert.IsNotNull(result);
            Assert.AreSame(10, result.Count);
        }

        [Test]
        public void TestGetBeersByEmail()
        {
            var result = _service.GetBeersByEmail("test@mail.com" );

            Assert.IsNotNull(result);
        }

        [Test]
        public void TestGetBeerById()
        {
            var result = _service.GetBeerById("10");

            Assert.AreSame(10, result.Id);
        }

        [Test]
        public void TestSaveBeersByEmail()
        {
            try
            {
                var model = new SaveBeer() { Email = "test@mail.com", Ids = new List<string>() { "1", "2", "3" } };
                _service.SaveBeersByEmail(model);

            }
            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }
           
        }

        
    }
}
