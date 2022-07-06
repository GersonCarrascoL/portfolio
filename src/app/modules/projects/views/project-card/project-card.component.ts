import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faAndroid, faPhp, faNode } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { IPortfolioProject } from '@shared/interfaces/portfolio-project.interface';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  public faAngular = faAngular as IconProp;
  public faAndroid = faAndroid as IconProp;
  public faPhp = faPhp as IconProp;
  public faNode = faNode as IconProp;
  public faMobile = faMobile as IconProp;
  @Input() project: IPortfolioProject;
  constructor() { }

  ngOnInit(): void { }
}
