import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterPaths } from '@shared/constants/path.constantes';

@Component({
  selector: 'portfolio-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  public routerPaths = RouterPaths;
  @Output() closeNav: EventEmitter<void>;
  constructor() {
    this.closeNav = new EventEmitter();
  }

  ngOnInit(): void { }

  onClose() {
    this.closeNav.emit();
  }
}
