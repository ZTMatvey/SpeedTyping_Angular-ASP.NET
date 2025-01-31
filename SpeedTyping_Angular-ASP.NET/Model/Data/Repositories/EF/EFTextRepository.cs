﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using SpeedTyping.Model.Data.Repositories.Abstract;

namespace SpeedTyping.Model.Data.Repositories.EF
{
    public class EFTextRepository : ITextRepository
    {
        private readonly ApplicationDbContext context;
        public EFTextRepository(ApplicationDbContext context) => this.context = context;
        public IEnumerable<Text> GetTexts() => context.Texts;
        public Text GetTextById(int id) => context.Texts.FirstOrDefault(x => x.Id == id);
        public Text GetTextByName(string name) => context.Texts.FirstOrDefault(x => x.Title == name);
        public void SaveText(Text text)
        {
            var isOnlyDigitsAndLetters = Regex.IsMatch(text.Title, @"^[a-zA-Zа-яА-Я0-9\s]+$");
            if (!isOnlyDigitsAndLetters)
                throw new ArgumentException("Ошиюка! Название текста может содержать только цифры и буквы.");

            context.Entry(text).State = text.Id == default ? EntityState.Added : EntityState.Modified;
            context.SaveChanges();
        }

        public void DeleteTextById(int id)
        {
            context.Texts.Remove(new Text() { Id = id });
            context.SaveChanges();
        }
        public void DeleteTextByName(string name)
        {
            var textToDelete = context.Texts.FirstOrDefault(x => x.Title == name);
            if (textToDelete == null)
                return;
            context.Texts.Remove(textToDelete);
            context.SaveChanges();
        }
    }
}
