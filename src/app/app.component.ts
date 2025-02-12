import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { ColorThemeService } from './services/color-theme.service';
import { Subscription } from 'rxjs';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  user!: IUser;
  private renderer = inject(Renderer2);
  private readonly colorThemeService = inject(ColorThemeService);
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.colorThemeService.isLightMode$.subscribe(isLightMode => {
      if (isLightMode) {
        this.renderer.removeClass(document.body, 'darkMode-bg');
      } else {
        this.renderer.addClass(document.body, 'darkMode-bg');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUser(userFound: IUser) {
    this.user = userFound;
    console.log(userFound);
    
  }
}
