import { Injectable } from '@angular/core';
import { IColor } from './color';

@Injectable({
  providedIn: 'root'
})
export class ColorRepository {

  private colors: IColor[] = [
    { ColorName: "red", HexValue: "#f00" },
    { ColorName: "green", HexValue: "#0f0" },
    { ColorName: "blue", HexValue: "#00f" },
    { ColorName: "cyan", HexValue: "#0ff" },
    { ColorName: "magenta", HexValue: "#f0f" },
    { ColorName: "yellow", HexValue: "#ff0" },
    { ColorName: "black", HexValue: "#000" }
  ]

  GetColors(): IColor[] {
    return this.colors;
  }
}
