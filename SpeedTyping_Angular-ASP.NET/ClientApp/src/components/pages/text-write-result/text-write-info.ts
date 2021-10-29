import { TextService } from "../services/text.service";

export class TextWriteInfo {
    private static _lastTextInfo: TextWriteInfo;
    public textId = 0;
    public countOfErrors = 0;
    private _countOfAllChars = 0;
    public countOfCorrects = 0;
    public miliseconds = 0;
    public static get lastTextInfo()
    {
        if(!this._lastTextInfo)
           this._lastTextInfo = new TextWriteInfo();
        return this._lastTextInfo;
    }
    setTotalCharacters(chars: number) {
        this._countOfAllChars = chars;
    }
    get countOfAllChars(){
        return this._countOfAllChars;
    }
    constructor() { 
        TextWriteInfo._lastTextInfo = this;
     }
    public get percentOfErrors(){
        return this.countOfErrors / this.countOfAllChars * 100;
    }
    public get percentOfCorrects(){        
        return this.countOfCorrects / this.countOfAllChars * 100;
    }
    public get time(){
        var minutes = Math.floor(this.miliseconds / 60000);
        var seconds = Math.floor((this.miliseconds % 60000) / 1000);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ":" + this.miliseconds % 1000;
    }
}