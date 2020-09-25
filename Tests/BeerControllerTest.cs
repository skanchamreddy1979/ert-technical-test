using ert_beer_app.Controllers;
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
        public void TestPopulateProductsCollection()
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=beersdb;Trusted_Connection=True;";
            var options = new DbContextOptionsBuilder<ApplicationContext>().UseSqlServer(connectionString).Options;
            var context = new ApplicationContext(options);

            BeerController beerController = new BeerController(context);
            var listOfBeersProducts = beerController.Get();
            var result = listOfBeersProducts.Any();

            Assert.NotNull(result);
        }
    }
}
