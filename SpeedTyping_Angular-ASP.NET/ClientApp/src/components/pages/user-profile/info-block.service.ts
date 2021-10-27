import { ElementRef } from "@angular/core";

export class InfoBlock {
  name: string;
  block: ElementRef;
  button: ElementRef;
  isActive: boolean;
  defaultDisplay: string;
  
  constructor(name: string, block: ElementRef, button: ElementRef, defaultDisplay: string, isActive: boolean = false) {
    this.name = name;
    this.block = block;
    this.button = button;
    this.isActive = isActive;
    this.defaultDisplay = defaultDisplay;
  }
}
