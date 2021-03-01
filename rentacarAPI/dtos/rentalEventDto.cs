using System;
using rentacarAPI.Models;

namespace rentacarAPI.dtos
{
    public class rentalEventDto
    {
        public int RentalId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string CustomerName { get; set; }
        public string VehicleName { get; set; }
        public string Discount { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
    }
}