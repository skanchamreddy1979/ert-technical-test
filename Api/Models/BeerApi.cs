namespace ert_beer_app.Api.Models
{
    public class BeerApi
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string imgUrl { get; set; }
        public string TagLine { get; set; }
        public string Abv { get; set; }
        public string Description { get; set; }
        public bool IsFavorite { get; set; }
    }
}
