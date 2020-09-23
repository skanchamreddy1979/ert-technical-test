using System.Collections.Generic;

namespace DAL
{
    internal class User
    {
        // Email is going to play ID role
        public string Email { get; set; }
        public virtual ICollection<Beer> FavouriteBeers { get; set; }
    }
}
