using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ert_beer_app.ViewModel
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
