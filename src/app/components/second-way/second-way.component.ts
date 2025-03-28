// external
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

// components
import { ResultComponent } from '../result/result.component';

// models
import { JsonData } from '../../models/json-data';

// Dynamic JSON fetch using HttpClient
@Component({
  standalone: true,
  selector: 'app-second-way',
  template: `
    <div class="second-way">
      <app-result [from]="'Second Way'" [jsonData]="jsonData()" />
    </div>
  `,
  imports: [ResultComponent],
})
export class SecondWayComponent {
  private http = inject(HttpClient);
  jsonData = toSignal(
    this.http
      .get<JsonData>('assets/json/data.json')
      .pipe(
        tap((response) =>
          console.log('--- Second Way of jsonDataResult :: ', response)
        )
      )
  );
}
