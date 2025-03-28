// external
import { Component, signal } from '@angular/core';

// components
import { ResultComponent } from '../result/result.component';

// models
import { JsonData } from '../../models/json-data';

// data
import data from '../../../assets/json/data.json';

// Static JSON import at build time
@Component({
  standalone: true,
  selector: 'app-first-way',
  template: `
    <div class="first-way">
      <app-result [from]="'First Way'" [jsonData]="jsonData()" />
    </div>
  `,
  imports: [ResultComponent],
})
export class FirstWayComponent {
  jsonData = signal<JsonData>(data);

  constructor() {
    console.log('--- First Way of jsonDataResult :: ', this.jsonData());
  }
}
