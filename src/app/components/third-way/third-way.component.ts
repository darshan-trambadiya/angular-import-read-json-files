// external
import { Component, signal } from '@angular/core';

// components
import { ResultComponent } from '../result/result.component';

// models
import { JsonData } from '../../models/json-data';

// data
import * as data from '../../../assets/json/data.json';

// Alternative static import (ES module syntax)
@Component({
  standalone: true,
  selector: 'app-third-way',
  template: `
    <div class="third-way">
      <app-result [from]="'Third Way'" [jsonData]="jsonData()" />
    </div>
  `,
  imports: [ResultComponent],
})
export class ThirdWayComponent {
  jsonData = signal<JsonData>((data as any).default);

  constructor() {
    console.log('--- Third Way of jsonDataResult :: ', this.jsonData());
  }
}
