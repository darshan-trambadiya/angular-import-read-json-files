// external
import { Routes } from '@angular/router';

// components
import { FirstWayComponent } from './components/first-way/first-way.component';
import { SecondWayComponent } from './components/second-way/second-way.component';
import { ThirdWayComponent } from './components/third-way/third-way.component';

export const routes: Routes = [
  { path: 'first-way', component: FirstWayComponent },
  { path: 'second-way', component: SecondWayComponent },
  { path: 'third-way', component: ThirdWayComponent },
];
