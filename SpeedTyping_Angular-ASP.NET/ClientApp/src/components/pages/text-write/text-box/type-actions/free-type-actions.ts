import { TextWriteInfo } from "src/components/pages/text-write-result/text-write-info";
import { ITypeActions } from "./abstract-type-actions";

export class FreeTypeActions implements ITypeActions {
    constructor(private textBox: HTMLInputElement, public textWriteInfo: TextWriteInfo) {  }
    newError(): void {
      this.textWriteInfo.errorCharsCount++;
    }
    newCorrect(): void {
      this.textWriteInfo.correctCharsCount++;
    }
    canUpdateLine(normalLine: string, currentLine: string): boolean {
      for(let i = 0; i < currentLine.length; i++)
        if(normalLine.length < i || currentLine[i] !== normalLine[i])
          this.textWriteInfo.unfixedErrorsCount++;
      return true;
    }
    errorInTextBox() {}
    allErrorsFixed() {}
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