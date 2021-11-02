import { EventEmitter } from "@angular/core";
import { TextService } from "./text.service";

export class TextSelectionFilters{
    private static _languageId: number = 0;
    static get languageId(){
        return this._languageId;
    }
    static set languageId(value: number){
        this._languageId = parseInt(value.toString());
    }
    private static _minContentLength: number = 0;
    static get minContentLength(){
        return this._minContentLength;
    }
    static set minContentLength(value: number){
        this._minContentLength = parseInt(value.toString());
    }
    static maxContentLength: number = 0;
    static filtersChanged = new EventEmitter();
    static canAdd(textService: TextService): boolean{
        let languageMatch = textService.language === this.languageId || this.languageId === 0;
        let minContentLengthMatch = textService.content.length >= this.minContentLength;
        let cond = languageMatch && minContentLengthMatch;
        if(cond)
            return true;
        return false;
    }
}