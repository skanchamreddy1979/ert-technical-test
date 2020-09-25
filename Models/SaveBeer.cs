using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class SaveBeer
    {
        [EmailAddress]
        public string Email { get; set; }
        [Required, MinLength(1, ErrorMessage = "At least one item required in work order"),MaxLength(5, ErrorMessage = "MaxLength 5")]
        public List<string> Ids { get; set; }
    }
}
