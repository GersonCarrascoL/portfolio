import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavbarComponent,
    DrawerComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,

    NavbarComponent,
    DrawerComponent,
    FontAwesomeModule
  ],
  providers: [],
})
export class SharedModule {}
