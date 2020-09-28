using ert_beer_app.DataAccess;

using Microsoft.EntityFrameworkCore;

namespace tests
{
    public class TestFixture
    {
        private BeerContext _beerContext;

        public BeerContext BeerContext => _beerContext ??= GetBeerContext();

        private BeerContext GetBeerContext()
        {
            return new BeerContext(new DbContextOptionsBuilder<BeerContext>()
                                       .UseInMemoryDatabase(databaseName: "Beer")
                                   .Options);
        }
    }
}
