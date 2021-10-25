using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SpeedTyping.Domain;
using SpeedTyping.Model.ViewModel;

namespace SpeedTyping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AccountManager _accountManager;

        public AccountController(AccountManager accountManager)
        {
            _accountManager = accountManager;
        }
        [HttpGet]
        [Route("Get")]
        public void Get()
        {
            var xz = 2;
            xz++;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<object> RegistrateUser(RegistrationViewModel modelVM)
        {
            var user = new ApplicationUser()
            {
                UserName = modelVM.UserName,
                Email = modelVM.Email,
            };
            var result = await _accountManager.UserManager.CreateAsync(user, modelVM.Password);
            return Ok(result);
        }
    }
}
