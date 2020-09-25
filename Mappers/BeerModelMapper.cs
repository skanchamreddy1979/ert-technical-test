using ert_beer_app.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Mappers
{
    public static class BeerModelMapper
    {
        public static List<Beer> ConvertResonseToBeer(string responseBody)
        {
            return JsonConvert.DeserializeObject<List<Beer>>(responseBody);
        }

        public static BeerDetail ConvertResonseToBeerDetail(string responseBody)
        {
            return JsonConvert.DeserializeObject<List<BeerDetail>>(responseBody).First();
        }

        public static BeerByName ConvertParamsToBeerByName(string _beerName, int _page, int _take)
        {

            return new BeerByName() { beerName = _beerName, page = _page, take = _take };
        }
    }
}
