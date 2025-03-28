// components
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

// models
import { JsonData } from '../../models/json-data';

@Component({
  standalone: true,
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  imports: [CommonModule],
})
export class ResultComponent {
  jsonData = input<JsonData>();
  from = input<'First Way' | 'Second Way' | 'Third Way'>();

  protected getBgColor(): string {
    switch (this.from()) {
      case 'First Way':
        return 'aliceblue';
      case 'Second Way':
        return 'lemonchiffon';
      case 'Third Way':
        return 'whitesmoke';
      default:
        return 'transparent';
    }
  }
}
