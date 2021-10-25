using Microsoft.AspNetCore.Identity;
using SpeedTyping.Domain.Repositories.Abstract;

namespace SpeedTyping.Domain
{
    public class DataManager
    {
        public readonly ITextRepository Texts;
        //public static RoleManager<> { get; set; }

        public DataManager(ITextRepository texts)
        {
            Texts = texts;
        }
    }
}
