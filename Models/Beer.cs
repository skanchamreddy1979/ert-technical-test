using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace ert_beer_app.Models
{
    public class Beer
    {
        [JsonPropertyName("id")]
        public long Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("tagLine")]
        public string TagLine { get; set; }

        [JsonPropertyName("first_brewed")]
        public string FirstBrewed { get; set; }

        [JsonPropertyName("abv")]
        public string Abv { get; set; }

        [JsonPropertyName("image_url")]
        public string ImageUrl { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }
    }
}