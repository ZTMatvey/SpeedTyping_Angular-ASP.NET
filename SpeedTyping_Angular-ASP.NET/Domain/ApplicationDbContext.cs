using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SpeedTyping.Model;

namespace SpeedTyping.Domain
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){}

        public DbSet<Text> Texts { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //admin role and user
            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Id = "dc086066-451d-4cb1-a1ad-933352eb82b4",
                Name = "admin",
                NormalizedName = "ADMIN"
            });
            builder.Entity<ApplicationUser>().HasData(new ApplicationUser
            {
                Id = "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                UserName = "Matvey",
                NormalizedUserName = "MATVEY",
                Email = "zenoteper@icloud.com",
                NormalizedEmail = "ZENOTEPER@ICLOUD.COM",
                EmailConfirmed = true,
                PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword(null, "psqwer"),
                SecurityStamp = string.Empty
            });
            builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                UserId = "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                RoleId = "dc086066-451d-4cb1-a1ad-933352eb82b4"
            });

            //just user
            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Id = "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                Name = "user",
                NormalizedName = "USER"
            });
            builder.Entity<ApplicationUser>().HasData(new ApplicationUser
            {
                Id = "f294e833-15e9-4066-8b41-61847ff6f0f7",
                UserName = "someUser",
                NormalizedUserName = "SOMEUSER",
                Email = "someuser@email.com",
                NormalizedEmail = "SOMEUSER@EMAIL.COM",
                EmailConfirmed = true,
                PasswordHash = new PasswordHasher<ApplicationUser>().HashPassword(null, "somepsqwer"),
                SecurityStamp = string.Empty
            });
            builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                UserId = "f294e833-15e9-4066-8b41-61847ff6f0f7",
                RoleId = "d4dad604-45e4-4ee7-b7b1-697bf7a623b2"
            });
        }
    }
}
