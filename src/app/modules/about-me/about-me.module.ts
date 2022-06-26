import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me.routing';
import { SharedModule } from '@shared/shared.module';
import { PortfolioAccordionModule } from '@shared/components/portfolio-accordion/portfolio-accordion.module';
import { AboutMeHomeComponent } from './page/about-me-home/about-me-home.component';

@NgModule({
  declarations: [
    AboutMeHomeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutMeModule {}
