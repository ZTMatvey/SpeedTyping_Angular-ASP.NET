export class TextWriteInfo {
    private static _lastTextInfo: TextWriteInfo;
    
    public errorCharsCount = 0;
    public correctCharsCount = 0;
    public countOfAllChars = 0;
    public miliseconds = 0;
    public title = "";
    public completedCount = 0;

    unfixedErrorsCount: number = 0;

    public static get lastTextInfo()
    {
        return this._lastTextInfo;
    }
    setTotalCharacters(chars: number) {
        this.countOfAllChars = chars;
    }
    constructor(
        public textId: number, 
        public textSize: number,
        public textWriteType: number) { 
        TextWriteInfo._lastTextInfo = this;
    }
    public static percentOfErrors(textWriteInfo: TextWriteInfo){
        return textWriteInfo.errorCharsCount / textWriteInfo.countOfAllChars * 100;
    }
    public static percentOfCorrects(textWriteInfo: TextWriteInfo){
        return textWriteInfo.correctCharsCount / textWriteInfo.countOfAllChars * 100;
    }
    public static time(textWriteInfo: TextWriteInfo) {
        var minutes = Math.floor(textWriteInfo.miliseconds / 60000);
        var seconds = Math.floor((textWriteInfo.miliseconds % 60000) / 1000);        
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ":" + textWriteInfo.miliseconds % 1000;
    }
}
