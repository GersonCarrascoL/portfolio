import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeHomeComponent } from "./page/about-me-home/about-me-home.component";

const routes: Routes = [
  {
    path: '',
    component: AboutMeHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AboutMeRoutingModule {}
