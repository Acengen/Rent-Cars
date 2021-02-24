using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class Customer
    {
        public int CustomerId { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string EmailAddress { get; set; }
        public int PhoneNumber { get; set; }
    }
}
