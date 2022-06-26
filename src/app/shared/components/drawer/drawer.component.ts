import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterPaths } from '@shared/constants/path.const';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SocialMedia } from '@shared/enums/social-media.enum';

@Component({
  selector: 'portfolio-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  faFacebookF = faFacebookF as IconProp;
  faGithub = faGithub as IconProp;
  faLinkedin = faLinkedin as IconProp;
  public routerPaths = RouterPaths;
  @Output() closeNav: EventEmitter<void>;
  constructor() {
    this.closeNav = new EventEmitter();
  }

  ngOnInit(): void { }

  onClose() {
    this.closeNav.emit();
  }

  onClickSocialMedia( socialMedia: string) {
    switch (socialMedia) {
      case 'facebook':
        window.open(SocialMedia.facebook, "_blank");
        break;
      case 'github':
        window.open(SocialMedia.github, "_blank");
        break;
      case 'linkedin':
        window.open(SocialMedia.linkedIn, "_blank");
        break;
    }
  }
}
