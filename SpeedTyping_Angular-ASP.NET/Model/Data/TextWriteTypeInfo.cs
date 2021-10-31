namespace SpeedTyping.Model.Data
{
    public class TextWriteInfo: EntityBase
    {
        public int TextId { get; set; }
        public TextSizes TextSize { get; set; }
        public TextWriteTypes TextWriteType { get; set; }
        public string UserId { get; set; }

        public int CorrectCharsCount { get; set; }
        public int ErrorCharsCount { get; set; }
        public int UnfixedErrorsCount { get; set; }
        public int Miliseconds { get; set; }
        public int CompletedCount { get; set; }

        public void CheckAndUpdateValues(TextWriteInfo other)
        {
            if (other.CorrectCharsCount > CorrectCharsCount)
                CorrectCharsCount = other.CorrectCharsCount;
            if (other.ErrorCharsCount < ErrorCharsCount)
                ErrorCharsCount = other.ErrorCharsCount;
            if (other.UnfixedErrorsCount < UnfixedErrorsCount)
                UnfixedErrorsCount = other.UnfixedErrorsCount;
            if (other.Miliseconds < Miliseconds)
                Miliseconds = other.Miliseconds;
        }
        public void AddCompleted() => CompletedCount++;
    }
}
