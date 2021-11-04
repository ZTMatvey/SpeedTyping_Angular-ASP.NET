using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeedTyping.Model.Data.Repositories.Abstract
{
    public interface ITextWriteTypeInfosRepository
    {
        public void Update(int id, TextWriteInfo newValue);
        public void Update(TextWriteInfo oldValue, TextWriteInfo newValue);
        public void Add(TextWriteInfo info);
        TextWriteInfo SaveAndGetBest(TextWriteInfo info);
        public TextWriteInfo GetById(int id);
        public void Remove(TextWriteInfo id);
        public IEnumerable<TextWriteInfo> GetAllByUserId(string id);
    }
}
