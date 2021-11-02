using System.Collections.Generic;

namespace SpeedTyping.Model.Data.Repositories.Abstract
{
    public interface ITextRepository
    {
        IEnumerable<Text> GetTexts();
        Text GetTextById(int id);
        Text GetTextByName(string name);
        void SaveText(Text text);
        void DeleteTextById(int id);
        void DeleteTextByName(string name);
    }
}
