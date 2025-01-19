import { Component, inject, OnInit } from '@angular/core';
import { GithubUsersService } from '../../services/github-users.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit {

  isLightMode!: boolean;
  user$: Observable<IUser | null> = of(null);
  private readonly colorThemeService = inject(ColorThemeService);
  // private readonly _githubUsersService = inject(GithubUsersService);


  ngOnInit(): void {
    // this.user$ = this._githubUsersService.getUser('danielmrz-dev');
    this.colorThemeService.isLightMode$.subscribe((value) => {
      this.isLightMode = value;
    })
  }
}
