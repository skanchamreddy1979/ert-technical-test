using System.Collections.Generic;

namespace ert_beer_app.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string UserEmail { get; set; }

        public IEnumerable<UserFavourite> Favourites { get; set; }
    }
}
