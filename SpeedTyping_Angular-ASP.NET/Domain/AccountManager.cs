using Microsoft.AspNetCore.Identity;

namespace SpeedTyping.Domain
{
    public class AccountManager
    {
        public readonly UserManager<ApplicationUser> UserManager;
        public readonly SignInManager<ApplicationUser> SignInManager;

        public AccountManager(
            SignInManager<ApplicationUser> signInManager, 
            UserManager<ApplicationUser> userManager)
        {
            SignInManager = signInManager;
            UserManager = userManager;
        }
    }
}
