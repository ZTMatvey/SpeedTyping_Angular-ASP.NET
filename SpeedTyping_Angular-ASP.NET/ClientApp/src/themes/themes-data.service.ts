import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ThemesDataService {
    textColor: string;
    inverseTextColor: string;
    bgColor: string;
    inverseBgColor: string;
    subBgColor: string;

    constructor() {
        this.textColor = "#333"        
        this.inverseTextColor = "#ccc" 
        this.bgColor = "#ccc";
        this.inverseBgColor = "#333";
        this.subBgColor = "#999";

        document.body.style.setProperty("--bg-color", this.bgColor);
        document.body.style.setProperty("--sub-bg-color", this.subBgColor);
        document.body.style.setProperty("--bg-color-rgb", this.hexToRgb(this.textColor));
        document.body.style.setProperty("--text-color", this.textColor);
        document.body.style.setProperty("--inverse-text-color", this.inverseTextColor);
    }
    hexToRgb(hex: string) {
      if(hex[0] === '#')
        hex = hex.substring(1);
      if(hex.length === 3)
      {
        let r = hex[0];
        let g = hex[1];
        let b = hex[2];
        hex = `#${r}${r}${g}${g}${b}${b}`;
      }
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `
        ${parseInt(result[1], 16)}, 
        ${parseInt(result[2], 16)}, 
        ${parseInt(result[3], 16)}`
        : null;
    }
}