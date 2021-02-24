using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace rentacarAPI.Models
{
    public partial class rentcarsContext : DbContext
    {
        public rentcarsContext()
        {
        }

        public rentcarsContext(DbContextOptions<rentcarsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Rentalevent> Rentalevents { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;database=rentcars;user=root;pwd=djole1989", x => x.ServerVersion("8.0.23-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.HasIndex(e => e.EmailAddress, "email_address")
                    .IsUnique();

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasColumnName("email_address")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FullName)
                    .HasColumnType("varchar(255)")
                    .HasColumnName("full_name")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");
            });

            modelBuilder.Entity<Rentalevent>(entity =>
            {
                entity.HasKey(e => e.RentalId)
                    .HasName("PRIMARY");

                entity.ToTable("rentalevent");

                entity.Property(e => e.RentalId).HasColumnName("rental_id");

                entity.Property(e => e.CustomerName)
                    .HasColumnType("varchar(255)")
                    .HasColumnName("customer_name")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("endDate");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("startDate");

                entity.Property(e => e.VehicleName)
                    .HasColumnType("varchar(255)")
                    .HasColumnName("vehicle_name")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("vehicles");

                entity.Property(e => e.VehicleId).HasColumnName("vehicle_id");

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasColumnName("brand")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ConstructionYear)
                    .HasColumnType("varchar(255)")
                    .HasColumnName("construction_year")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Count)
                    .HasColumnName("count")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasColumnName("model")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.NumberOfSeats)
                    .HasColumnName("number_of_seats")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.Picture)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasColumnName("picture")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PricePerDay).HasColumnName("price_per_day");

                entity.Property(e => e.VType)
                    .IsRequired()
                    .HasColumnType("varchar(255)")
                    .HasColumnName("v_type")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
