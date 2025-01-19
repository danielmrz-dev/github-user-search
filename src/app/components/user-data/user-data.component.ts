import { Component, inject, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit {

  @Input({ required: true }) user!: IUser;
  isLightMode!: boolean;
  private readonly colorThemeService = inject(ColorThemeService);

  ngOnInit(): void {
    this.colorThemeService.isLightMode$.subscribe((value) => {
      this.isLightMode = value;
    })
  }
}
