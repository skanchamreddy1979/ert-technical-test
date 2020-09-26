namespace ert_beer_app.Models
{
    public class GetBeersRequest
    {
        public long Page { get; set; } = 1;
        public long PerPage { get; set; } = 25;
        public string BeerName { get; set; }
    }
}