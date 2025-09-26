import { effect, Injectable, signal } from '@angular/core';

export interface Theme {
  name: string;
  value: string;
}

const STORAGE_KEY = 'selected-theme';
const DEFAULT_THEME = 'light';

const loadFromLocalStorage = () => {
  const history = localStorage.getItem(STORAGE_KEY);
  return history ?? DEFAULT_THEME;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeSelected = signal<string>(loadFromLocalStorage());

  public readonly themes: Theme[] = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'Cupcake', value: 'cupcake' },
    { name: 'Synthwave', value: 'synthwave' },
    { name: 'Retro', value: 'retro' },
    { name: 'Cyberpunk', value: 'cyberpunk' },
    { name: 'Valentine', value: 'valentine' },
    { name: 'Halloween', value: 'halloween' },
    { name: 'Garden', value: 'garden' },
    { name: 'Forest', value: 'forest' },
    { name: 'Luxury', value: 'luxury' },
    { name: 'Dracula', value: 'dracula' }
  ];

  loadThemeEffect = effect(() => {
    console.log('ingreso effect')
    const value = this.themeSelected();
    console.log({value})
    this.setTheme(value);
  })

  private setTheme(themeName: string): void {
    if (this.isValidTheme(themeName)) {
      document.documentElement.setAttribute('data-theme', themeName);

      localStorage.setItem(STORAGE_KEY, themeName);
    }
  }

  private isValidTheme(themeName: string): boolean {
    return this.themes.some(theme => theme.value === themeName);
  }


}
