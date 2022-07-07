import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathPortfolio } from '@shared/enums/path.enum';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathPortfolio.HELLO,
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: PathPortfolio.HELLO,
        loadChildren: () =>
          import('@modules/hello/hello.module').then((m) => m.HelloModule)
      },
      {
        path: PathPortfolio.ABOUT_ME,
        loadChildren: () =>
          import('@modules/about-me/about-me.module').then((m) => m.AboutMeModule)
      },
      {
        path: PathPortfolio.CONTACT_ME,
        loadChildren: () =>
          import('@modules/contact-me/contact-me.module').then((m) => m.ContactMeModule)
      },
      {
        path: PathPortfolio.PROJECTS,
        loadChildren: () =>
          import('@modules/projects/projects.module').then((m) => m.ProjectsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
