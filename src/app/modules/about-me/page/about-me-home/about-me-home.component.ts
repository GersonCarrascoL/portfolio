import { Component, OnInit } from '@angular/core';
import { PortfolioDirectoryItemsPersonalInfo } from '@shared/constants/portfolio-directory-items.const';

@Component({
  selector: 'portfolio-about-me-home',
  templateUrl: './about-me-home.component.html',
  styleUrls: ['./about-me-home.component.scss']
})
export class AboutMeHomeComponent implements OnInit {
  public collapsing = true;
  public personalInfoDirectoryItems = PortfolioDirectoryItemsPersonalInfo;
  public type: string = 'bio';
  constructor() { }

  ngOnInit(): void { }

  onClickItemPersonalInfo(event: any) {
    this.type = event.text;
  }
}
