import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-title-view',
  templateUrl: './title-view.component.html',
  styleUrls: ['./title-view.component.scss']
})
export class TitleViewComponent implements OnInit {

  @Input() title: string = 'Default';
  constructor() { }

  ngOnInit(): void { }
}
