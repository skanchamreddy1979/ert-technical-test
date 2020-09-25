using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ert_beer_app.Models
{
    public class BeerByName : IValidatableObject
    {
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Invalid beerName length")]
        public string beerName { get; set; }
        [Required(ErrorMessage = "Page parameter is required")]
        public int page { get; set; }
        [Required(ErrorMessage = "Take parameter is required (min 1 max 10)")]
        [Range(1, 10)]
        public int take { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            List<ValidationResult> errors = new List<ValidationResult>();

            if (beerName?.Length < 1 || beerName?.Length > 50)
                errors.Add(new ValidationResult("beerName length must be 1-50"));
            if (page < 1)
            {
                errors.Add(new ValidationResult("Page must be more than 0"));
            }
            if (this.take < 1 || this.take > 10)
                errors.Add(new ValidationResult("Take range must be 1-10"));

            return errors;

        }
    }
}
