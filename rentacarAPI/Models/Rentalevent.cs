﻿using System;
using System.Collections.Generic;

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
    }
}
