import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeRoutingModule } from './contact-me.routing';
import { SharedModule } from '@shared/shared.module';
import { ContactMeHomeComponent } from './page/contact-me-home/contact-me-home.component';
import { ContactMeFormComponent } from './view/contact-me-form/contact-me-form.component';
import { ContactMeSuccessComponent } from './view/contact-me-success/contact-me-success.component';

@NgModule({
  declarations: [
    ContactMeHomeComponent,
    ContactMeFormComponent,
    ContactMeSuccessComponent
  ],
  imports: [
    CommonModule,
    ContactMeRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class ContactMeModule {}
