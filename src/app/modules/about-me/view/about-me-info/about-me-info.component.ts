import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.scss']
})
export class AboutMeInfoComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit(): void { }
}
