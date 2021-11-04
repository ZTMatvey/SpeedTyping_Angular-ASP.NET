import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextService } from '../../services/text.service';
import { TextWriteInfo } from '../../text-write-result/text-write-info';
import { ITypeActions } from './type-actions/abstract-type-actions';
import { FreeTypeActions } from './type-actions/free-type-actions';
import { NormalTypeActions } from './type-actions/normal-type-actions';
import { LineUpdateResult } from './line-update-enum';

@Component({
  selector: 'st-text-write-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @Output() textchangedfirst = new EventEmitter();
  @Output() newvalidcharacter = new EventEmitter();
  @Output() textcompleted = new EventEmitter();
  @Output() error = new EventEmitter();
  @Output() currentlinechanged = new EventEmitter<string>();
  typeActions?: ITypeActions;
  textBox?: HTMLInputElement;

  lines: string[] = [];
  currentLineIndex: number = 0;
  currentMaxInputLength: number = 0;
  isIncorrectInput: boolean = false;
  private readonly correctCharactersInLine: number;
  private readonly maxCharactersInLine: number;
  lastLine: string = "";
  _textChanged: any;

  constructor() {
    this.correctCharactersInLine = 75;
    this.maxCharactersInLine = 125; 
  }
  currentLineChanged() {
    this.currentlinechanged.emit(
      this.lines[this.currentLineIndex]
    );
  }
  textChangedFirst(textBoxValue: string, isCharacterDeleted: boolean)
  {
    this.textchangedfirst.emit();
    this._textChanged = this.textChanged;
    this.textChanged(textBoxValue, isCharacterDeleted);
  }
  private setupLines(text: TextService)
  {
    let subCounter = 0;
    let startOfString = 0;    
    let inputString = text.contentWithCorrectSize;
    
    for (var i = 0; i < inputString.length; i++, subCounter++) {
      if (inputString[i] === '\n') {
        this.lines[this.lines.length++] = inputString.substring(startOfString, i);
        startOfString = i;
        subCounter = 0;
        continue;
      }
      let isSpaceOrTab = inputString[i] === ' ' || inputString[i] === '\t';
      let firstCondition = (subCounter >= this.correctCharactersInLine) && isSpaceOrTab;
      let secondCondition = subCounter >= this.maxCharactersInLine;
      if (firstCondition || secondCondition) {
          this.lines[this.lines.length++] = inputString.substring(startOfString, i);
          startOfString = i;
          subCounter = 0;
      }
    }
    if (subCounter > 1)
      this.lines[this.lines.length++] = inputString.substring(startOfString, inputString.length);
    
    let totalCharacters = 0;

    for (var i = 0; i < this.lines.length; i++) {
      var startFlag = false;
      var endFlag = false;
  
      while (true) {
          if (this.lines[i].length > 0) {
              let line = this.lines[i];
              if (line[0] === ' ' ||
              line[0] === '\n')
                  this.lines[i] = line.substring(1, line.length);
              else
                  startFlag = true;
              if (line[line.length - 1] === ' ' ||
                  line[line.length - 1] === '\n')
                  this.lines[i] = line.substring(0, line.length - 1);
              else
                  endFlag = true;
          } else {
              this.lines.splice(i--, 1);
              break;
          }
          if (startFlag && endFlag)
              break;
      }
    }
    for(let i = 0; i < this.lines.length; i++)
      for(let j = 0; j < this.lines[i].length; j++)
        totalCharacters++;
    TextWriteInfo.lastTextInfo.setTotalCharacters(totalCharacters);
  }
  onTextChange(event: any)
  {
    let isCharacterDeleted = event.inputType === "deleteContentBackward";
    let textBoxValue = this.textBox!.value;
    let difference = textBoxValue.length - this.lastLine.length;
    if(difference > 1)
    {
      this.textBox!.value = this.lastLine;
      return;
    }
    this.lastLine = textBoxValue;
    this._textChanged(textBoxValue, isCharacterDeleted);
  }
  onKeyup(event: any){
    if(event.keyCode === 13)
    {
      this.textBox!.value += ' ';
      this.onTextChange(event);      
    }
  }
  textChanged(textBoxValue: string, isCharacterDeleted: boolean)
  {
    let isSizeMoreThanInCurrentLine = 
      textBoxValue.length > this.lines[this.currentLineIndex].length;
    let lastCharIsSpace = textBoxValue[textBoxValue.length - 1] == ' ';
    if(isSizeMoreThanInCurrentLine && lastCharIsSpace)
    {
      let result = this.updateLine(this.lines[this.currentLineIndex], textBoxValue);
      if(result === LineUpdateResult.textCompleted)
        this.textCompleted();
      if(result !== LineUpdateResult.error)
        return;
    }
    
    let isLengthMax = false;
    let isTextBoxValid = this.isTextBoxValid(textBoxValue);
    if(textBoxValue.length > this.currentMaxInputLength)
    {
      this.currentMaxInputLength = textBoxValue.length;
      isLengthMax = true;
    }
    if(isTextBoxValid && this.isIncorrectInput)
    {
      this.isIncorrectInput = false;
      this.typeActions?.allErrorsFixed();
    } 
    else if(!isTextBoxValid && !this.isIncorrectInput)
    {
      this.isIncorrectInput = true;
      this.typeActions?.errorInTextBox();
    }
    if(this.isIncorrectInput && !isCharacterDeleted)
    {
      this.typeActions!.newError();
      this.error.emit();
    }
    if(isLengthMax && isTextBoxValid)
    {
      this.typeActions?.newCorrect();
      this.newvalidcharacter.emit();
    }
  }
  isTextBoxValid(textBoxValue: string): boolean{
    let subStribgedCorrectValue = 
    this.lines[this.currentLineIndex].substring(0, textBoxValue?.length);
    if(textBoxValue === subStribgedCorrectValue)
      return true;
    return false;
  }
  updateLine(normalLine: string, currentLine: string): LineUpdateResult{
    if(!this.typeActions!.canUpdateLine(normalLine, currentLine))
      return LineUpdateResult.error;
    this.textBox!.value = "";
    this.currentLineIndex++;
    this.currentMaxInputLength = 0;
    this.currentLineChanged();
    if(this.lines.length === this.currentLineIndex)
      return LineUpdateResult.textCompleted;
    return LineUpdateResult.success;
  }
  textCompleted(){
    this.typeActions?.allCorrectInTextBox();
    this.textcompleted.emit();
  }
  ngOnInit()
  {
    this.textBox = <HTMLInputElement>document.getElementById("text-box");
    this.textBox.focus();
  }
  setupText(text: TextService, actionTypeId: number, textWriteInfo: TextWriteInfo) {    
    switch(actionTypeId) {
      case 2: 
        this.typeActions = new FreeTypeActions(this.textBox!, textWriteInfo);
        break;
      case 1:
      default:
        this.typeActions = new NormalTypeActions(this.textBox!, textWriteInfo);
    }
    this.setupLines(text);
    this.currentLineChanged();
    this._textChanged = this.textChangedFirst;
  }
}
