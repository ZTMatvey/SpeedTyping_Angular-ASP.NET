using System;
using System.Linq;
using SpeedTyping.Model;

namespace SpeedTyping.Domain.Repositories.Abstract
{
    public interface ITextRepository
    {
        IQueryable<Text> GetTexts();
        Text GetTextById(int id);
        Text GetTextByName(string name);
        void SaveText(Text text);
        void DeleteTextById(int id);
        void DeleteTextByName(string name);
    }
}
