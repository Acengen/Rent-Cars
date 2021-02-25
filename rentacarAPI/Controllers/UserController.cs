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

             _context.Customers.Remove(customerFromRepo);

             await _context.SaveChangesAsync();

             return NoContent();
        }

        [HttpPost("rentalEvent/{cid}/{vid}")]
        public async Task<IActionResult> RentACar(int cid, int vid, Rentalevent rentalevent)
        {
            var customerFromRepo = await _repo.GetCustomer(cid);
            var vehiclerepo = await _repo.GetVehicle(vid);


            if (vehiclerepo.Count < 1)
            {
                return BadRequest("No vehicles of that tipe in a store!");
            }

            rentalevent.CustomerName = customerFromRepo.FullName;
            rentalevent.VehicleName = vehiclerepo.Brand;
            vehiclerepo.Count--;


            await _context.Rentalevents.AddAsync(rentalevent);
            await _context.SaveChangesAsync();

            return Ok(rentalevent);

        }

    }
}