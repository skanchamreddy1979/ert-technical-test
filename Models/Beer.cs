using Newtonsoft.Json;

namespace ert_beer_app.Models
{
    public class Beer
    {
        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("tagLine")]
        public string TagLine { get; set; }

        [JsonProperty("abv")]
        public string Abv { get; set; }

        [JsonProperty("imgUrl")]
        public string ImgUrl { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
