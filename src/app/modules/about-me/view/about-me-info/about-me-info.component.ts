import { Component, Input, OnInit } from '@angular/core';
import { PortfolioEducation } from '@shared/constants/portfolio-education.const';
import { PortfolioLExperience } from '@shared/constants/portfolio-experience.const';

@Component({
  selector: 'about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.scss']
})
export class AboutMeInfoComponent implements OnInit {
  @Input() type: string;
  public personalEducation = PortfolioEducation;
  public personalExperience = PortfolioLExperience;
  constructor() { }

  ngOnInit(): void { }
}
