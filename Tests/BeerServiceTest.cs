using ert_beer_app.Controllers;
using ert_beer_app.Ifrastucture;
using ert_beer_app.Interfaces;
using ert_beer_app.Models;

using Microsoft.EntityFrameworkCore;

using NUnit.Framework;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Tests
{
    public class BeerServiceTest
    {
        IBeerService _service;

        BeerServiceTest(IBeerService service)
        {
            _service = service;
        }

        [Test]
        public void TestPopulateProductsCollection()
        {
            _service.PopulateProductsCollection();
            var list = _service.GetAllBeerProducts();

            Assert.IsNotEmpty(list);
        }


        [Test]
        public void TestGetBeerById()
        {
            var id = "14";
            var beer = _service.GetBeerById(id);

            Assert.NotNull(beer);
        }
    }
}