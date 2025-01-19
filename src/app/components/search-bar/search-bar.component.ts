import { Component, inject, OnInit } from '@angular/core';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {

  isLightMode!: boolean
  private readonly colorThemeService = inject(ColorThemeService);

  ngOnInit(): void {
    this.colorThemeService.isLightMode$.subscribe((value) => {
      this.isLightMode = value;
    })
  }

}
