import { Component, OnInit } from '@angular/core';
import { PortfolioProject } from '@shared/constants/portfolio-projects.const';

@Component({
  selector: 'portfolio-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {
  public collapsing = true;
  public projectsList = PortfolioProject;
  constructor() { }

  ngOnInit(): void {
    console.log(this.projectsList);
  }

  onChangeFilter(event: any) {
    console.log(event)
  }
}
