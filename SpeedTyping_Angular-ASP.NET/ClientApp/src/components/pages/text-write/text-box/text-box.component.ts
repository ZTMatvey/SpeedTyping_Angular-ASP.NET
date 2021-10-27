import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'st-text-write-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @Input() text?: TextService;
  @Output() textchangedfirst = new EventEmitter();
  @Output() newvalidcharacter = new EventEmitter();
  @Output() textcompleted = new EventEmitter();
  @Output() currentlinechanged = new EventEmitter<string>();
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
  textChangedFirst(textBoxValue: string)
  {
    this.textchangedfirst.emit();
    this._textChanged = this.textChanged;
    this.textChanged(textBoxValue);
  }
  private setupLines(text: TextService)
  {
    let subCounter = 0;
    let startOfString = 0;    
    let inputString = text.content;
    
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
  }
  onTextChange()
  {
    let textBoxValue = this.textBox!.value;
    let difference = textBoxValue.length - this.currentMaxInputLength;
    if(difference > 1)
    {
      this.textBox!.value = this.lastLine;
      return;
    }
    this.lastLine = textBoxValue;
    this._textChanged(textBoxValue);
  }
  onKeyup(event: any){
    if(event.keyCode === 13)
    {
      this.textBox!.value += ' ';
      this.onTextChange();
    }
  }
  textChanged(textBoxValue: string)
  {
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
      this.normalInTextBox();
    } 
    else if(!isTextBoxValid && !this.isIncorrectInput)
    {
      let isSimSize = textBoxValue.length === this.lines[this.currentLineIndex].length + 1;
      let lastCharIsSpace = textBoxValue[textBoxValue.length - 1] == ' ';
      if(isSimSize && lastCharIsSpace)
      {
        let result = this.updateLine();
        if(result === 0)
          this.textCompleted();
      }
      else
      {
        this.isIncorrectInput = true;
        this.errorInTextBox();
      }
    }
    if(isLengthMax && isTextBoxValid)
      this.newvalidcharacter.emit();
  }
  isTextBoxValid(textBoxValue: string): boolean{
    let subStribgedCorrectValue = 
    this.lines[this.currentLineIndex].substring(0, textBoxValue?.length);
    if(textBoxValue === subStribgedCorrectValue)
      return true;
    return false;
  }
  updateLine(): number{
    this.textBox!.value = "";
    this.currentLineIndex++;
    this.currentMaxInputLength = 0;
    this.currentLineChanged();
    if(this.lines.length === this.currentLineIndex)
      return 0;
    return 1;
  }
  textCompleted(){
    this.allCorrectInTextBox();
    this.textcompleted.emit();
  }
  errorInTextBox() {
    this.removeAllNonMainClassesFromTextBox();
    this.textBox!.classList.add('text-write__text-box-error');
  }
  normalInTextBox() {
    this.removeAllNonMainClassesFromTextBox();
    this.textBox!.classList.add('text-write__text-box-normal');
  }
  allCorrectInTextBox() {
    this.removeAllNonMainClassesFromTextBox();
    this.textBox!.classList.add('text-write__text-box-all-correct');
  }
  removeAllNonMainClassesFromTextBox(){
    this.textBox!.classList.remove('text-write__text-box-normal');
    this.textBox!.classList.remove('text-write__text-box-error');
    this.textBox!.classList.remove('text-write__text-box-all-correct');
  }
  ngOnInit()
  {
    this.textBox = <HTMLInputElement>document.getElementById("text-box");
    this.textBox.focus();
    this.setupText();
  }
  setupText() {    
    this.setupLines(this.text!);
    this.currentLineChanged();
    this._textChanged = this.textChangedFirst;
  }
}
