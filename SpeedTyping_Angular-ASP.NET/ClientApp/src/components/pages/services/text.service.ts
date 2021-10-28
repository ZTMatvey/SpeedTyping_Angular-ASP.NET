export class TextService{
  partOfContent?: string;
  constructor(public title: string, public content: string, public id: number, public textSizeId: number = TextSize.Full) {  }
  get contentWithCorrectSize(){
    switch(this.textSizeId)
    {
      case TextSize.UltraShort:
        return this.content.length < 50 ? this.content : this.content.substring(0, 50);
      case TextSize.Short:{
        let end = this.content.length * .25;
        return this.content.substring(0, end);
      }
      case TextSize.Medium:{
        let end = this.content.length * .5;
        return this.content.substring(0, end);
      }
      case TextSize.Large:{
        let end = this.content.length * .75;
        return this.content.substring(0, end);
      }
      default:
        return this.content;
    }
  }
}
enum TextSize{
  UltraShort = 1,
  Short = 2,
  Medium = 3,
  Large = 4,
  Full = 5,
}