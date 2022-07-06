import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelloHomeComponent } from "./page/hello-home/hello-home.component";

const routes: Routes = [
  {
    path: '',
    component: HelloHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HelloRoutingModule {}
