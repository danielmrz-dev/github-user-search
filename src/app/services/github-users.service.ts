import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  private readonly _http = inject(HttpClient);

  getUser(username: string): Observable<IUser | null> {
    return this._http.get<IUser>(`https://api.github.com/users/${username}`).pipe(
      catchError(() => of(null))
    )
  }
}
