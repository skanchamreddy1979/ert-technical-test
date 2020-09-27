using ert_beer_app.Models;

using System.Collections.Generic;

namespace ert_beer_app.Interfaces
{
    public interface IBeerService
    {
        Beer GetBeerById(string id);

        List<Beer> GetAllBeerProducts();

        void PopulateProductsCollection();
    }
}
