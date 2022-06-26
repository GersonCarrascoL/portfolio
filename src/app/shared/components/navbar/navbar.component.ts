import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() openNav: EventEmitter<void>;
  constructor() {
    this.openNav = new EventEmitter();
  }

  ngOnInit(): void { }

  onOpen() {
    this.openNav.emit();
  }
}
