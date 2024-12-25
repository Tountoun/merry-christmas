import { Component } from '@angular/core';
import { XmasComponent } from './xmas/xmas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [XmasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merry-christmas';
}
