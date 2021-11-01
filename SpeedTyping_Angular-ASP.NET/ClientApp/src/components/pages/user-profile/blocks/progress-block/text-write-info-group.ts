import { TextWriteInfo } from 'src/components/pages/text-write-result/text-write-info';

export class TextWriteInfoGroup{
    group: TextWriteInfo[] = [];
    name: string = "";

    constructor(public textId: number) {  }
}