export class TextWriteInfo {
    private static _lastTextInfo: TextWriteInfo;
    
    public errorCharsCount = 0;
    public correctCharsCount = 0;
    public countOfAllChars = 0;
    public miliseconds = 0;
    public title = "";
    public completedCount = 0;
    public cpm = 0;

    unfixedErrorsCount = 0;
    id = '0';

    updateCpm() {
        this.cpm = this.countOfAllChars / (this.miliseconds / 60000);
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
    public static get lastTextInfo()
    {
        return this._lastTextInfo;
    }
    public static percentOfErrors(textWriteInfo: TextWriteInfo){
        return textWriteInfo.errorCharsCount / textWriteInfo.countOfAllChars * 100;
    }
    public static percentOfUnfixedErrors(textWriteInfo: TextWriteInfo){
        return textWriteInfo.unfixedErrorsCount / textWriteInfo.countOfAllChars * 100;
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
