using System.Text.Json.Serialization;

namespace ert_beer_app.Models
{
    public class Beer
    {
        [JsonPropertyName("id")]
        public int BeerId { get; set; }

        public string Name { get; set; }

        public string TagLine { get; set; }

        public double Abv { get; set; }

        public string ImgUrl { get; set; }

        public string Description { get; set; }

        public string FirstBrewed { get; set; }
    }
}