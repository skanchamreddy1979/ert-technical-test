using ert_beer_app.Controllers;
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
    public class BeerControllerTest
    {
        [Test]
        public void TestPopulateProductsCollection(IBeerService beerService)
        {
            BeerController beerController = new BeerController(beerService);

            var result = beerService;
            Assert.NotNull(result);
        }
    }
}
