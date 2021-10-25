using System.ComponentModel.DataAnnotations;

namespace SpeedTyping.Model
{
    public abstract class EntityBase
    {
        [Key]
        public int Id { get; set; }
    }
}
