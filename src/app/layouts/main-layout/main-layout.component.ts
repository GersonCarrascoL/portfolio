import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('drawer', {static: true}) drawer: MatSidenav;
  public mode: MatDrawerMode;
  constructor() {
  }

  ngOnInit(): void {
    if(window.innerWidth >= 768) {
      this.mode = 'side';
      this.drawer.close();
    } else {
      this.mode = 'over';
    }
   }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if(width >= 768) {
      this.mode = 'side';
      this.drawer.close();
    } else {
      this.mode = 'over';
    }
  }
}
