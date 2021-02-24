using System.ComponentModel.DataAnnotations;

namespace rentacarAPI.dtos
{
    public class VehicleToUpdateDto
    {
        [Required(ErrorMessage="Vehicle Type is required")]
        public string VType { get; set; }

        [Required(ErrorMessage="Brand is required")]
        public string Brand { get; set; }

        [Required(ErrorMessage="Model is required")]
        public string Model { get; set; }
        public string ConstructionYear { get; set; }
        public int? NumberOfSeats { get; set; }

        [Required(ErrorMessage="Picture is required")]
        public string Picture { get; set; }

        [Required(ErrorMessage="Price is required")]
        public int PricePerDay { get; set; }
        public int? Count { get; set; }
    }
}