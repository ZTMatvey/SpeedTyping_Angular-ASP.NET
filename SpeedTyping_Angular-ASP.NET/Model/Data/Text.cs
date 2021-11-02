using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using SpeedTyping.Model.Data;

namespace SpeedTyping.Model
{
    [Index(nameof(Title), IsUnique = true)]
    public class Text : EntityBase
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string TextContent { get; set; }
        [Required]
        public Language Language { get; set; }
    }
}
