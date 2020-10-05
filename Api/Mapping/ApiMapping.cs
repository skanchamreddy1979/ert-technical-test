using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Api.Models;
using ert_beer_app.Business.Models;

namespace ert_beer_app.Api.Mapping
{
    public static class ApiMapping
    {
        public static IEnumerable<BeerApi> MapToApi(this IEnumerable<Beer> source)
        {
            return source.Select(MapToApi);
        }
        public static IEnumerable<Beer> MapToBusiness(this IEnumerable<BeerApi> source)
        {
            return source.Select(MapToBusiness);
        }
        public static BeerApi MapToApi(this Beer source)
        {
            return new BeerApi()
            {
                Name = source.Name,
                imgUrl = source.ImageUrl,
                Id = source.Id, 
                TagLine = source.TagLine,
                Abv = source.Abv,
                Description = source.Description,
                IsFavorite = source.IsFavorite
            };
        }
        public static Beer MapToBusiness(this BeerApi source)
        {
            return new Beer()
            {
                Name = source.Name,
                ImageUrl = source.imgUrl,
                Id = source.Id,
                TagLine = source.TagLine,
                Abv = source.Abv,
                Description = source.Description
            };
        }
    }
}
