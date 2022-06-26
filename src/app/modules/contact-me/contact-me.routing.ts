import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactMeHomeComponent } from "./page/contact-me-home/contact-me-home.component";

const routes: Routes = [
  {
    path: '',
    component: ContactMeHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContactMeRoutingModule {}
