import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserContactInfoComponent } from './user-data/components/user-contact-info/user-contact-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    UserDataComponent,
    UserContactInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    UserDataComponent
  ]
})
export class ComponentsModule { }
