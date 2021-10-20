export class TextService{
    constructor(title: string, content: string, id: string) {
      this.title = title;
      this.content = content;
      this.id = id;
    }
    title: string;
    partOfContent?: string;
    content: string;
    id: string;
  }