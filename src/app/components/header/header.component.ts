import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  isLightMode!: boolean;
  private readonly _colorThemeService = inject(ColorThemeService);
  

  ngOnInit(): void {
    this.isLightMode = this._colorThemeService.isLightMode;
  }
  switchColorMode() {
    this._colorThemeService.toggleTheme();
    this.isLightMode = this._colorThemeService.isLightMode;
  }

}
