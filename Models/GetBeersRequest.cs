using Microsoft.AspNetCore.Mvc;

namespace ert_beer_app.Models
{
    public class GetBeersRequest
    {
        [FromQuery(Name = "page")]
        public int Page { get; set; } = 1;

        [FromQuery(Name = "per_page")]
        public int PerPage { get; set; } = 25;

        [FromQuery(Name = "beer_name")]
        public string BeerName { get; set; }
    }
}