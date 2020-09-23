using System;
using System.ComponentModel.DataAnnotations;

namespace DAL
{
    public class Beer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string TagLine { get; set; }
        public DateTime BrewDate { get; set; }
        public double Abv { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}
