import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../components/top-menu/top-menu.component";

@Component({
  selector: 'app-layout-country',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './layout-country.component.html',
  styleUrl: './layout-country.component.css'
})
export class LayoutCountryComponent {

}
