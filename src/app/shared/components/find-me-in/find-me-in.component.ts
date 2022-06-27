import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialMedia } from '@shared/enums/social-media.enum';

@Component({
  selector: 'find-me-in',
  templateUrl: './find-me-in.component.html',
  styleUrls: ['./find-me-in.component.scss']
})
export class FindMeInComponent implements OnInit {
  public faFacebookF = faFacebookF as IconProp;
  public faGithub = faGithub as IconProp;
  public faLinkedin = faLinkedin as IconProp;
  constructor() { }

  ngOnInit(): void { }

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
