using Newtonsoft.Json;

namespace ert_beer_app.Models
{
    public class Beer
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "tagLine")]
        public string TagLine { get; set; }

        [JsonProperty(PropertyName = "abv")]
        public double Abv { get; set; }

        [JsonProperty(PropertyName = "imgUrl")]
        public string ImgUrl { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "firstBrewed")]
        public string FirstBrewed { get; set; }
    }
}