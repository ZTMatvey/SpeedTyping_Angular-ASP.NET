using SpeedTyping.Model.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeedTyping.Model.ViewModel
{
    public class TextEditViewModel
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public Language Language { get; set; }
    }
}
