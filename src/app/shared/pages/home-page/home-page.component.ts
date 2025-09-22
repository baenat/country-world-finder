import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  welcome = signal<string>('Bienvenido');
  description = signal<string>('¡Viaja con el conocimiento de cada rincón del planeta al alcance de tu mano!');

}
