import { ITypeActions } from "./abstract-type-actions";

export class FreeTypeActions implements ITypeActions {
    constructor(private textBox: HTMLInputElement) {  }
    newError(): void {
        
    }
    newCorrect(): void {
        
    }
    canUpdateLine(normalLine: string, currentLine: string): boolean {
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