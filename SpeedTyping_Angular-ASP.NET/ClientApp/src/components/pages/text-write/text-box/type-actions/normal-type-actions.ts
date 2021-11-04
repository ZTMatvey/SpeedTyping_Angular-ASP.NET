import { TextWriteInfo } from "src/components/pages/text-write-result/text-write-info";
import { ITypeActions } from "./abstract-type-actions";

export class NormalTypeActions implements ITypeActions {
  constructor(private textBox: HTMLInputElement, public textWriteInfo: TextWriteInfo) {  }
  newError(): void {
    this.textWriteInfo.errorCharsCount++;
  }
  newCorrect(): void {
    this.textWriteInfo.correctCharsCount++;
  }
  canUpdateLine(normalLine: string, currentLine: string): boolean {
      let normalPartOfCurrentLine = currentLine.substring(0, currentLine.length - 1);
      if(normalLine === normalPartOfCurrentLine)
          return true;
      return false;
  }
  errorInTextBox() {
    this.removeAllNonMainClassesFromTextBox();
    this.textBox!.classList.add('text-write__text-box-error');
  }
  allErrorsFixed() {
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
}