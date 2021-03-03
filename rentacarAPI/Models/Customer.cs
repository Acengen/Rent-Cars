using System;
using System.Collections.Generic;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Rentalevents = new HashSet<Rentalevent>();
        }

        public int CustomerId { get; set; }
        public string FullName { get; set; }
        public string EmailAddress { get; set; }
        public int? PhoneNumber { get; set; }
        public string Vip { get; set; }

        public virtual ICollection<Rentalevent> Rentalevents { get; set; }
    }
}
