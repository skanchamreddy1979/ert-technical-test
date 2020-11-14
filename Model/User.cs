using System.Collections.Generic;

namespace ert_beer_app.Model
{
    public class User
    {
        public int UserId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public List<Favourite> Favourites { get; } = new List<Favourite>();
    }
}
