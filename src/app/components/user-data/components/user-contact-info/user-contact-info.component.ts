import { Component, inject, Input, OnInit } from '@angular/core';
import { ColorThemeService } from '../../../../services/color-theme.service';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrl: './user-contact-info.component.scss'
})
export class UserContactInfoComponent implements OnInit {

  isLightMode!: boolean;
  private readonly colorThemeService = inject(ColorThemeService)

  @Input({ required: true }) user!: IUser | null;

  ngOnInit(): void {
    this.colorThemeService.isLightMode$.subscribe((value) => {
      this.isLightMode = value;
    })
  }

}
