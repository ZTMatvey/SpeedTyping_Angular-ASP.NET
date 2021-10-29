export interface ITypeActions {
    errorInTextBox(): void;
    allErrorsFixed(): void;
    allCorrectInTextBox(): void;
    newError(): void;
    newCorrect(): void;
    canUpdateLine(normalLine: string, currentLine: string): boolean;
}