import { SocialMedia } from "@shared/enums/social-media.enum";
import { IPortfolioLinkFindMe } from "@shared/interfaces/portfolio-links-find.me.interface";

export const PortfolioLinksFindMe: IPortfolioLinkFindMe[] = [
  {
    text: 'Facebook',
    link : SocialMedia.facebook
  },
  {
    text: 'Github',
    link : SocialMedia.github
  },
  {
    text: 'LinkedIn',
    link : SocialMedia.linkedIn
  }
]
