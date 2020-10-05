using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ert_beer_app.Business.Models;
using ert_beer_app.Data.Models;

namespace ert_beer_app.Business.Mapping
{
    public static class BusinessMapping
    {
        public static IEnumerable<BrewDogBeer> MapToData(this IEnumerable<Beer> source)
        {
            return source.Select(MapToData);
        }
        public static IEnumerable<FavoriteBeer> MapToFavorite(this IEnumerable<Beer> source)
        {
            return source.Select(MapToFavorite);
        }
        public static IEnumerable<Beer> MapToBusiness(this IEnumerable<BrewDogBeer> source)
        {
            return source.Select(MapToBusiness);
        }
        public static IEnumerable<Beer> MapToBusiness(this IEnumerable<FavoriteBeer> source)
        {
            return source.Select(MapToBusiness);
        }

        public static BrewDogBeer MapToData(Beer source)
        {
            return new BrewDogBeer()
            {
                Name = source.Name,
                Image_url = source.ImageUrl,
                Id = source.Id,
                Abv = source.Abv,
                Description = source.Description,
                TagLine = source.TagLine
            }; 
        }
        public static FavoriteBeer MapToFavorite(this Beer source)
        {
            return new FavoriteBeer() { BeerId = source.Id};
        }
        public static Beer MapToBusiness(this BrewDogBeer source)
        {
            return new Beer() 
            { 
                Name = source.Name, 
                ImageUrl = source.Image_url, 
                Id = source.Id, 
                Abv = source.Abv, 
                Description = source.Description, 
                TagLine = source.TagLine
            };
        }
        public static Beer MapToBusiness(this FavoriteBeer source)
        {
            return new Beer() { Id = source.BeerId };
        }
    }
}
