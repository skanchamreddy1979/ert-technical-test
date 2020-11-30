using System;
using System.Collections.Generic;
using System.Text;

namespace ERT.Domain
{
    public class Beer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string FirstBrewed  { get; set; }

        public double? Abv { get; set; }

        public string Description  { get; set; }

        public string ImageUrl { get; set; }

        public string Tagline { get; set; }

    }
}
