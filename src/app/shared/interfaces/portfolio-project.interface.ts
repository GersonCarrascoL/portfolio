export interface IPortfolioProject {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  tag: string;
}

export interface IPortfolioFilterProject {
  android: boolean;
  angular: boolean;
  flutter: boolean;
  nodejs: boolean;
  php: boolean;
}
