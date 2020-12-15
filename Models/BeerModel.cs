using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ert_beer_app.Models
{
    [Table("Beer")]
    public class BeerModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [DisplayName("Beer Id")]
        public int BeerId { get; set; }
        public string Name { get; set; }

        [DisplayName("Tag Line")]
        public string Tag_Line { get; set; }

        [DisplayName("First Brewed")]
        public string First_Brewed { get; set; }
        public string Abv { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
        public DateTime ModifiedDate { get; internal set; }
        public DateTime CreatedDate { get; internal set; }

    }
}
