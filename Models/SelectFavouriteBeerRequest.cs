using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ert_beer_app.Models
{
    public class SelectFavouriteBeerRequest
    {
        [JsonPropertyName("beerIds")]
        public List<long> BeerIds { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }
    }
}
