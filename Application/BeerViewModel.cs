using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Application
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
