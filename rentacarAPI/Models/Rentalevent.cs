using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Rentalevent
    {
        public int RentalId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string CustomerName { get; set; }
        public string VehicleName { get; set; }
        public string Discount { get; set; }
        public int? CustomerId { get; set; }
        public int? VehicleId { get; set; }

        [JsonIgnore]
        public virtual Customer Customer { get; set; }

        [JsonIgnore]
        public virtual Vehicle Vehicle { get; set; }
    }
}
