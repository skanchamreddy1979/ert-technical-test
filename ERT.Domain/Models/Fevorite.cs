using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using ERT.Common;

namespace ERT.Domain
{
    [Table("Fevorite")]
    public class Fevorite
    {
        [Key]
        public string FevoriteId { get; set; }

        [Required]
        public bool? IsFevorite { get; set; }

        [Required]
        public int BeerId { get; set; }

        public Fevorite() { }

        public void AddFevorite(Fevorite fevorite)
        {
            FevoriteId = fevorite.FevoriteId ?? FevoriteId.GenerateGuid();
            IsFevorite = fevorite.IsFevorite;
            BeerId = fevorite.BeerId;
        }
    }
}
