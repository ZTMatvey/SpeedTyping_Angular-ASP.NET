using Microsoft.AspNetCore.Identity;
using SpeedTyping.Model.Data.Repositories.Abstract;

namespace SpeedTyping.Model.Data
{
    public class DataManager
    {
        public readonly ITextRepository Texts;
        public readonly ITextWriteTypeInfosRepository TextWriteTypeInfos;

        public DataManager(ITextRepository texts, ITextWriteTypeInfosRepository textWriteTypeInfos)
        {
            Texts = texts;
            TextWriteTypeInfos = textWriteTypeInfos;
        }
    }
}
