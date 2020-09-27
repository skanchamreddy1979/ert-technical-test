using ert_beer_app.Models;

using Nancy.Json;

using System.Collections.Generic;

namespace ert_beer_app.Mappers
{
    public class BeerMapper
    {
        public static List<Beer> MapBeerResponceToList(string json)
        {
            var serializer = new JavaScriptSerializer();
            List<Beer> beersList = serializer.Deserialize<List<Beer>>(json);

            return beersList;
        }

        public static Beer MapResponceToSingleProduct(string json) {
            var serializer = new JavaScriptSerializer();
            Beer beersList = serializer.Deserialize<Beer>(json);

            return beersList;
        }
    }
}
