using SpeedTyping.Model.Data.Repositories.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SpeedTyping.Model.Data.Repositories.EF
{
    public class EFTextWriteTypeInfosRepository : ITextWriteTypeInfosRepository
    {
        private readonly ApplicationDbContext context;

        public EFTextWriteTypeInfosRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void Update(int id, TextWriteInfo newValue)
        {
            var oldValue = context.TextWriteTypeInfos.FirstOrDefault(x => x.Id == id);
            if (oldValue == null)
                throw new Exception("Value does not found");
            Update(oldValue, newValue);
        }
        public void Update(TextWriteInfo oldValue, TextWriteInfo newValue)
        {
            oldValue.AddCompleted();
            oldValue.CheckAndUpdateValues(newValue);
            context.SaveChanges();
        }
        public void Add(TextWriteInfo info)
        {
            info.AddCompleted();
            context.TextWriteTypeInfos.Add(info);
            context.SaveChanges();
        }
        public TextWriteInfo SaveAndGetBest(TextWriteInfo info)
        {
            Func<TextWriteInfo> getValue = () =>
            {
                return context.TextWriteTypeInfos.FirstOrDefault(x =>
                    x.UserId == info.UserId &&
                    x.TextId == info.TextId &&
                    x.TextSize == info.TextSize &&
                    x.TextWriteType == info.TextWriteType);
            };
            var old = getValue();
            if (old == null)
                Add(info);
            else
                Update(old, info);
            return getValue();
        }
        public IEnumerable<TextWriteInfo> GetAllByUserId(string id)
            => context.TextWriteTypeInfos.Where(x => x.UserId == id);
        public TextWriteInfo GetById(int id) 
            => context.TextWriteTypeInfos.FirstOrDefault(x => x.Id == id);
    }
}
