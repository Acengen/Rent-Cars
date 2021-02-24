using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Rentalevent
    {
        public int RentalId { get; set; }

        [Required]
        public DateTime StartDate { get; set; }
        
        [Required]
        public DateTime EndDate { get; set; }
        public string CustomerName { get; set; }
        public string VehicleName { get; set; }
    }
}
