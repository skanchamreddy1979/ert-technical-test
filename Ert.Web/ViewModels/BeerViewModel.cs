using System;

using Ert.DataAccessLayer;
using Ert.Web.Converters;

using Newtonsoft.Json;

namespace Ert.Web.ViewModels
{
    public class BeerViewModel
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("tagline")]
        public string TagLine { get; set; }
        [JsonProperty("first_brewed")]
        [JsonConverter(typeof(BrewDateConverter))]
        public DateTime BrewDate { get; set; }
        [JsonProperty("abv")]
        public double Abv { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("image_url")]
        public string ImageUrl { get; set; }

        public static BeerViewModel FromBeer(Beer beer) => new BeerViewModel
        {
            Id = beer.Id,
            Name = beer.Name,
            TagLine = beer.TagLine,
            BrewDate = beer.BrewDate,
            Abv = beer.Abv,
            Description = beer.Description,
            ImageUrl = beer.ImageUrl
        };

        public Beer ToBeer() => new Beer
        {
            Id = Id,
            Name = Name,
            TagLine = TagLine,
            BrewDate = BrewDate,
            Abv = Abv,
            Description = Description,
            ImageUrl = ImageUrl
        };
    }
}
