import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ColorThemeService } from '../../services/color-theme.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GithubUsersService } from '../../services/github-users.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {

  isLightMode!: boolean;
  searchForm!: FormGroup;
  isUserFound: boolean | null = null;
  private readonly colorThemeService = inject(ColorThemeService);
  private readonly _fb = inject(FormBuilder);
  private readonly _githubUserService = inject(GithubUsersService);

  @Output() onInput = new EventEmitter<IUser>();

  ngOnInit(): void {
    this.colorThemeService.isLightMode$.subscribe((value) => {
      this.isLightMode = value;
    })

    this.searchForm = this._fb.group({
      searchBar: this._fb.control('', [Validators.required])
    })
  }

  get searchBar(): FormControl {
    return this.searchForm.get('searchBar') as FormControl;
  }

  onSubmit() {
    this._githubUserService.getUser(this.searchBar.value).subscribe((user) => {
      if (user) {
        this.isUserFound = true;
        this.onInput.emit(user);
      } else {
        this.isUserFound = false;
      }
    })
  }

}
