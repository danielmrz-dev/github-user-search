import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserDataComponent } from './user-data/user-data.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    UserDataComponent
  ]
})
export class ComponentsModule { }
