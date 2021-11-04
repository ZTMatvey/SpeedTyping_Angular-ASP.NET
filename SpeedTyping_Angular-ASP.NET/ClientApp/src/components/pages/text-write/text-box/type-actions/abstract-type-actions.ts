import { TextWriteInfo } from "src/components/pages/text-write-result/text-write-info";

export interface ITypeActions {
    errorInTextBox(): void;
    allErrorsFixed(): void;
    allCorrectInTextBox(): void;
    newError(): void;
    newCorrect(): void;
    canUpdateLine(normalLine: string, currentLine: string): boolean;
    textWriteInfo: TextWriteInfo;
}