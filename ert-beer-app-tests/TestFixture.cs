using ert_beer_app.DataAccess;
using ert_beer_app.Handlers;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace ert_beer_app_tests
{
    public class TestFixture
    {
        public TestFixture()
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddScoped<BeersHandler>();
            serviceCollection.AddDbContext<BeerDbContext>();

            ServiceProvider = serviceCollection.BuildServiceProvider();
        }

        public IServiceProvider ServiceProvider { get; }
    }
}
