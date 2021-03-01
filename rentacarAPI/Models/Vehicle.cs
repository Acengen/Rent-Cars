using System;
using System.Collections.Generic;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Vehicle
    {
        public int VehicleId { get; set; }
        public string VType { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string ConstructionYear { get; set; }
        public int? NumberOfSeats { get; set; }
        public string Picture { get; set; }
        public int PricePerDay { get; set; }
        public int? Count { get; set; }
    }
}
