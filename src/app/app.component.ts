import { Component } from '@angular/core';
import { IColor } from "./color";
import { ColorRepository } from './color-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'TestInteractivity';

  Colors: Array<IColor>;

  constructor(repository: ColorRepository) {
    this.Colors = repository.GetColors();
  }

  Sort(propertyName: string, isDescending: boolean = false): void {
    this.Colors = this.Colors.sort((a, b) => {
        var result: number = a[propertyName].localeCompare(b[propertyName]);
        return isDescending ? -result : result;
      });
  }
}
