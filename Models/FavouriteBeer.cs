namespace ert_beer_app.Models
{
    public class FavouriteBeer
    {
        public long Id { get; set; }
        public long BeerId { get; set; }
        public Beer Beer { get; set; }
        public long UserId { get; set; }
        public User User { get; set; }
    }
}