import { Component, inject, OnInit } from '@angular/core';
import { GithubUsersService } from '../../services/github-users.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit {

  user$: Observable<IUser | null> = of(null);
  // private readonly _githubUsersService = inject(GithubUsersService);

  ngOnInit(): void {
    // this.user$ = this._githubUsersService.getUser('danielmrz-dev');
  }
}
