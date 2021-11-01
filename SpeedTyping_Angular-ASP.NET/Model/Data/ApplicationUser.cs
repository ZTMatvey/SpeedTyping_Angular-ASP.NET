using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace SpeedTyping.Model.Data
{
    public class ApplicationUser: IdentityUser
    {
        private readonly ApplicationDbContext _context;
        public int TypesInfoListId { get; set; }
        public ApplicationUser(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
