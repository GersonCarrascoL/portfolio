import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioAccordionModule } from './components/portfolio-accordion/portfolio-accordion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioDirectoryItemComponent } from './components/portfolio-directory-item/portfolio-directory-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DrawerComponent,
    PortfolioDirectoryItemComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,

    PortfolioAccordionModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    NavbarComponent,
    DrawerComponent,
    PortfolioDirectoryItemComponent,

    FontAwesomeModule,
    PortfolioAccordionModule
  ],
  providers: [],
})
export class SharedModule {}
