import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextCreateService } from '../../services/text-create.service';

@Component({
  selector: 'app-create-text',
  templateUrl: './create-text.component.html',
  styleUrls: ['./create-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTextComponent {
  @ViewChild("wrapper", { static: false })
  wrapper?: ElementRef;
  @ViewChild("form", { static: false })
  form: NgForm | undefined;
  oldName: string = "";
  private countOfReplacements = 0;

  constructor(public textCreateService: TextCreateService) {  }
  onSubmit(){
    this.textCreateService.create()?.subscribe(resp=> console.log(resp));
  }
  onSubmitBtnClick(){
    this.form?.onSubmit(undefined!);
  }
  addCharactersToReplace() {
    var currentReplace = `<div class="text-edit__character-edit-block" id="text-edit__character-edit-block-${this.countOfReplacements}">` +
        `<p class="text-edit__character-edit" id="text-edit__character-edit-from-${this.countOfReplacements}" contenteditable="true"></p>` +
        '<p class="text-edit__character-edit-arrow">arrow_forward</p>' +
        `<p class="text-edit__character-edit" id="text-edit__character-edit-to-${this.countOfReplacements}" contenteditable="true"></p></div>`;
    this.countOfReplacements++;
    this.wrapper!.nativeElement.insertAdjacentHTML("beforeend", currentReplace);
  }
  changeText() {
    var textarea = document.getElementById("textEditTextarea") as HTMLTextAreaElement;
    let textareaContent = textarea!.value;
    
    for (let i = 0; i < this.countOfReplacements; i++) {
        let from = document.getElementById(`text-edit__character-edit-from-${i}`)!.innerHTML;
        let to = document.getElementById(`text-edit__character-edit-to-${i}`)!.innerHTML;

        var regExp = new RegExp(from, 'gi');

        textareaContent = textareaContent.replace(regExp, to);
    }
    textarea!.value = textareaContent;
  }
}
