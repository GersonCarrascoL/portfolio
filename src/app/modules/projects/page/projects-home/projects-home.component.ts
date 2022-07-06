import { Component, OnInit } from '@angular/core';
import { PortfolioProject } from '@shared/constants/portfolio-projects.const';
import { IPortfolioFilterProject, IPortfolioProject } from '@shared/interfaces/portfolio-project.interface';

@Component({
  selector: 'portfolio-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {
  public collapsing = true;
  public projectsList = PortfolioProject;
  public projectListFilter: IPortfolioProject[];
  public titleProjects: string = 'all';
  constructor() { }

  ngOnInit(): void {
    this.projectListFilter = this.projectsList;
  }

  onChangeFilter(event: IPortfolioFilterProject) {
    this.setTItleProjects(event);
    this.filterProjects(event);
  }

  private filterProjects(projectFilter: IPortfolioFilterProject) {
    this.projectListFilter = [];
    this.projectsList.forEach( item => {
      if(item.tag == 'android' && projectFilter.android) {
        this.projectListFilter.push(item)
      }
      if(item.tag == 'nodejs' && projectFilter.nodejs) {
        this.projectListFilter.push(item)
      }
      if(item.tag == 'flutter' && projectFilter.flutter) {
        this.projectListFilter.push(item)
      }
      if(item.tag == 'angular' && projectFilter.angular) {
        this.projectListFilter.push(item)
      }
      if(item.tag == 'php' && projectFilter.php) {
        this.projectListFilter.push(item)
      }
    })
  }
  private setTItleProjects (project: IPortfolioFilterProject) {
    if(!project.android && !project.angular && !project.flutter && !project.nodejs && ! project.php) {
      this.titleProjects = 'all';
    } else {
      this.titleProjects = '';
      if (project.android) {
        this.titleProjects += 'Android; ';
      }
      if (project.angular) {
        this.titleProjects += 'Angular; ';
      }
      if (project.flutter) {
        this.titleProjects += 'Flutter; ';
      }
      if (project.nodejs) {
        this.titleProjects += 'Node JS; ';
      }
      if (project.php) {
        this.titleProjects += 'PHP; ';
      }
    }
  }
}
