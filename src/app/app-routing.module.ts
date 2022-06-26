import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'hello',
        loadChildren: () =>
          import('@modules/hello/hello.module').then((m) => m.HelloModule)
      },
      {
        path: 'about-me',
        loadChildren: () =>
          import('@modules/about-me/about-me.module').then((m) => m.AboutMeModule)
      },
      {
        path: 'contact-me',
        loadChildren: () =>
          import('@modules/contact-me/contact-me.module').then((m) => m.ContactMeModule)
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('@modules/projects/projects.module').then((m) => m.ProjectsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
