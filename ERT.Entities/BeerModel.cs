using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ERT.Entities
{
    [Table("Beer")]
    public class BeerModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BeerId { get; set; }

        [DisplayName("Beer Id")]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [DisplayName("Tag Line")]
        public string TagLine { get; set; }

        [DisplayName("First Brewed")]
        public string First_Brewed { get; set; }
        public string Abv { get; set; }
        public string image_url { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        [NotMapped]
        public bool checkboxAnswer { get; set; }
    }
}
