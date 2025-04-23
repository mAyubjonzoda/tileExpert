import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tileExpert';
  items = [
    { name: 'Ссылки', icon: 'link', route: '#' },
    { name: 'Контакты', icon: 'group', route: '#' },
    { name: 'Теги', icon: 'numbers', route: '#' },
    { name: 'Избранное', icon: 'stars_2', route: '#' },
    { name: 'Посещения', icon: 'history', route: '#' },
  ];
}
