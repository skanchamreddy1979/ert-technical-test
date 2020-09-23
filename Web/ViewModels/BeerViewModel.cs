using System;

using DAL;

using ert_beer_app.Converters;

using Newtonsoft.Json;

namespace ert_beer_app.ViewModels
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
