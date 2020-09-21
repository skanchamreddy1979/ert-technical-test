using System.Text.Json.Serialization;

namespace Application.ViewModel
{
    public class BeerViewModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("first_brewed")]
        public string FirstBrewed { get; set; }

        [JsonPropertyName("abv")]
        public double AbvData { get; set; }
        [JsonPropertyName("tagline")]
        public string Tagline { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
