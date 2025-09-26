import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'theme-dropdown',
  imports: [NgClass],
  templateUrl: './theme-dropdown.component.html',
  styleUrl: './theme-dropdown.component.css'
})
export class ThemeDropdownComponent {

  themeService = inject(ThemeService);

}
