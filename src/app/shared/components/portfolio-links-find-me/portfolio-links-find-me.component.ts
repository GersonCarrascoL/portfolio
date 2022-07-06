import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-links-find-me',
  templateUrl: './portfolio-links-find-me.component.html',
  styleUrls: ['./portfolio-links-find-me.component.scss']
})
export class PortfolioLinksFindMeComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    window.open(this.link, "_blank");
  }
}
