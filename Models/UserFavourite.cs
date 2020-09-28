namespace ert_beer_app.Models
{
    public class UserFavourite
    {
        public int BeerId { get; set; }

        public Beer Beer { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}
