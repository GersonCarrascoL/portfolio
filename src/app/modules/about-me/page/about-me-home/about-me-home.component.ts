import { Component, OnInit } from '@angular/core';
import { PortfolioDirectoryItemsPersonalInfo } from '@shared/constants/portfolio-directory-items.const';

@Component({
  selector: 'portfolio-about-me-home',
  templateUrl: './about-me-home.component.html',
  styleUrls: ['./about-me-home.component.scss']
})
export class AboutMeHomeComponent implements OnInit {
  collapsing = true;

  personalInfoDirectoryItems = PortfolioDirectoryItemsPersonalInfo;
  constructor() { }

  ngOnInit(): void { }

  onClickItemPersonalInfo(event: any) {
    console.log(event)
  }
}
