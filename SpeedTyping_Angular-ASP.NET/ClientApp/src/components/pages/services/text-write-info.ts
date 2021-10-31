export class TextWriteInfo {
    correctCharsCount: number = 0;
    errorCharsCount: number = 0;
    unfixedErrorsCount: number = 0;
    miliseconds: number = 0;
    constructor(
        public textId: number, 
        public textSize: number,
        public textWriteType: number) {  }
}