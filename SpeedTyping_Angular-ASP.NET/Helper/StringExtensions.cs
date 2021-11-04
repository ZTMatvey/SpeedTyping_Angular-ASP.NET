using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SpeedTyping.Helper
{
    public static class StringExtensions
    {
        public static bool IsNullOrEmpty(this string str) => string.IsNullOrEmpty(str);
        public static string GetUserIdFromClaim(this Claim claim) => claim.ToString()[8..];
    }
}
