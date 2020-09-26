using System.ComponentModel.DataAnnotations;

namespace ert_beer_app.Models
{
    public class User
    {
        public long Id { get; set; }
        public string Email { get; set; }
    }
}