using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rentacarAPI.dtos;
using rentacarAPI.Models;
using rentacarAPI.repos;

namespace rentacarAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly rentcarsContext _context;
        private readonly IVehicle _repo;
        private readonly IMapper _mapper;
        public UserController(rentcarsContext context, IVehicle repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;

        }

        //Get Vehicles
        [HttpGet]
        public async Task<IActionResult> GetVehicles()
        {
            var vehiclerepo = await _repo.GetVehicles();

            return Ok(vehiclerepo);
        }

        //Get vehicle
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVehicle(int id)
        {
            var vehicle = await _repo.GetVehicle(id);

            return Ok(vehicle);
        }


        //Create Vehicle
        [HttpPost("createVehicle")]
        public async Task<IActionResult> CreateVehicle(Vehicle vehicle)
        {
            await _context.Vehicles.AddAsync(vehicle);

            await _context.SaveChangesAsync();

            return Ok(vehicle);
        }

        //Edit Vehicle
        [HttpPut("vehicle/edit/{id}")]
        public async Task<IActionResult> EditVehicle(VehicleToUpdateDto vehicleToUpdateDto, int id)
        {
            var vehiclerepo = await _repo.GetVehicle(id);
            var vehicleToReturn = _mapper.Map(vehicleToUpdateDto, vehiclerepo);

            await _context.SaveChangesAsync();

            return Ok(vehicleToReturn);
        }

        //Delete Vehicle
        [HttpDelete("vehicle/{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            var vehiclerepo = await _repo.GetVehicle(id);

            _context.Vehicles.Remove(vehiclerepo);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        //Get Customers
        [HttpGet("customers")]
        public async Task<IActionResult> GetCustomers()
        {
            var vehiclerepo = await _repo.GetCustomers();

            return Ok(vehiclerepo);
        }

        //Create Customer
        [HttpPost("createCustomer")]
        public async Task<IActionResult> CreateCustomer(Customer customer)
        {
            await _context.Customers.AddAsync(customer);

            await _context.SaveChangesAsync();

            return Ok(customer);
        }

        //Edit Customer
        [HttpPut("customer/edit/{id}")]
        public async Task<IActionResult> EditCustomer(CustomerToUpdateDto customerToUpdateDto, int id)
        {
            var customerFromRepo = await _repo.GetCustomer(id);

            var customerToReturn = _mapper.Map(customerToUpdateDto, customerFromRepo);

            await _context.SaveChangesAsync();

            return Ok(customerToReturn);
        }

        //Delete Customer
        [HttpDelete("customer/{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
             var customerFromRepo = await _repo.GetCustomer(id);

            var rentalFromCustomer = await _context.Rentalevents.FirstOrDefaultAsync(r => r.CustomerId == id);

            var vehicleRental = await _context.Vehicles.FirstOrDefaultAsync(v => v.Model == rentalFromCustomer.VehicleName);

            var vehicleCountInRental = _context.Rentalevents.Where(r => r.VehicleName == vehicleRental.Model).Count();
            
            vehicleRental.Count += vehicleCountInRental;

             _context.Customers.Remove(customerFromRepo);

             await _context.SaveChangesAsync();

             return NoContent();
        }

        //Get rentals
        [HttpGet("rentalEvent")]
        public async Task<IActionResult> GetRental()
        {
            var rentalEvent = await _repo.GetRentalevents();

            return Ok(rentalEvent);
        }

        //Delete rental by id
        [HttpDelete("rentalEvent/{id}")]
        public async Task<IActionResult> DeleteRental(int id)
        {
            var rentalfromrepo = await _repo.GetRentalevent(id);
            var rentalList = await _repo.GetRentalevents();
            var customer = await _context.Customers.FirstOrDefaultAsync(c => c.FullName == rentalfromrepo.CustomerName);
            var vehicleInRental = await _context.Vehicles.FirstOrDefaultAsync(v => v.Model == rentalfromrepo.VehicleName);
            
            if(rentalList.Where(r => r.CustomerName == customer.FullName).Count() <= 4)
            {
                customer.Vip = "No";
            }else {
                customer.Vip = "Yes";
            }


            vehicleInRental.Count++;

            _context.Rentalevents.Remove(rentalfromrepo);


            await _context.SaveChangesAsync();

            return NoContent();
        }

        //Create rental event
        [HttpPost("rentalEvent/{cname}/{vname}")]
        public async Task<IActionResult> RentACar(string cname, string vname, Rentalevent rentalevent)
        {
            
            var customerName = await _context.Customers.FirstOrDefaultAsync(c => c.FullName == cname);
            var vehiclerepo = await _context.Vehicles.FirstOrDefaultAsync(v => v.Model == vname);
            var rental = await _context.Rentalevents.ToListAsync();

           

            if (vehiclerepo.Count < 1)
            {
                return BadRequest("vehicle is not in a store!");
            }


            var d = rentalevent.EndDate - rentalevent.StartDate;

            if(d.TotalDays > 3 && d.TotalDays <= 5){
                rentalevent.Discount = "5%";
            }

            if(d.TotalDays > 5 && d.TotalDays <= 10){
                rentalevent.Discount = "7%";
            }

            if(d.TotalDays > 10){
                rentalevent.Discount = "10%";
            }

            rentalevent.CustomerName = customerName.FullName;
            rentalevent.VehicleName = vehiclerepo.Model;
            rentalevent.CustomerId = customerName.CustomerId;
            vehiclerepo.Count--;

            if(rental.Where(r => r.CustomerName == customerName.FullName).Count() >= 3)
            {
                customerName.Vip = "Yes";
               
            }

            await _context.Rentalevents.AddAsync(rentalevent);
            await _context.SaveChangesAsync();

            return Ok(new {
                rentalevent,
                vehiclerepo
            });

        }

    }
}