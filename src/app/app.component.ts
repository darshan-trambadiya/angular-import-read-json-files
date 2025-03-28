// external
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'import-read-json-files';

  // Type the signal explicitly
  protected routes = signal<{ path: string; label: string }[]>([
    { path: 'first-way', label: 'First Method' },
    { path: 'second-way', label: 'HTTP Client Method' },
    { path: 'third-way', label: 'ES Module Import' },
    { path: '', label: 'Go To Home Page' },
  ]);

  constructor(private route: ActivatedRoute) {}

  isActiveRoute(path: string): boolean {
    return this.route.snapshot.url[0]?.path === path;
  }
}
