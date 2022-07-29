import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me.routing';
import { SharedModule } from '@shared/shared.module';
import { AboutMeHomeComponent } from './page/about-me-home/about-me-home.component';
import { AboutMeInfoComponent } from './view/about-me-info/about-me-info.component';
import { AboutMeSnippetsComponent } from './view/about-me-snippet/about-me-snippets.component';

@NgModule({
  declarations: [
    AboutMeHomeComponent,
    AboutMeInfoComponent,
    AboutMeSnippetsComponent
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
export class AboutMeModule { }
