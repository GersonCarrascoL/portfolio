import { ProjectType } from "@shared/enums/project.enum";

export interface IPortfolioProject {
  name: string;
  description: string;
  image: string;
  githubLink: string | null;
  architecture: string;
  type: ProjectType;
  tag: string;
}

export interface IPortfolioFilterProject {
  android: boolean;
  angular: boolean;
  flutter: boolean;
  nodejs: boolean;
  php: boolean;
}
