import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPortfolioDirectoryItem } from '@shared/interfaces/portfolio-directory-item.interface';
import { Color } from '@shared/types/color.type';

@Component({
  selector: 'portfolio-directory-item',
  templateUrl: './portfolio-directory-item.component.html',
  styleUrls: ['./portfolio-directory-item.component.scss']
})
export class PortfolioDirectoryItemComponent implements OnInit {
  @Input() text: string = 'default';
  @Input() icon: string = 'home';
  @Input() color: Color = 'white';

  @Input() isOpen: boolean = false;
  @Output() onClickItem: EventEmitter<IPortfolioDirectoryItem>;
  constructor() {
    this.onClickItem = new EventEmitter();
  }

  ngOnInit(): void { }

  onClick() {
    this.onClickItem.emit({
      text: this.text,
      icon: this.icon,
      color: this.color
    });
  }
}
