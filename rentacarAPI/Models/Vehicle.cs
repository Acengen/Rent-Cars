using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Vehicle
    {
        
        public int VehicleId { get; set; }
        
        [Required]
        public string VType { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string ConstructionYear { get; set; }

        [Required]
        public int? NumberOfSeats { get; set; }

        [Required]
        public string Picture { get; set; }

        [Required]
        public int PricePerDay { get; set; }

        [Required]
        public int? Count { get; set; }
    }
}
