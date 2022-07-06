import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routing';
import { SharedModule } from '@shared/shared.module';
import { ProjectsHomeComponent } from './page/projects-home/projects-home.component';
import { FilterProjectComponent } from './views/filter-project/filter-project.component';
import { ProjectCardComponent } from './views/project-card/project-card.component';

@NgModule({
  declarations: [
    ProjectsHomeComponent,
    FilterProjectComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class ProjectsModule {}
