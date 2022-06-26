import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PortfolioAccordionContent } from "./directives/portfolio-accordion-content.directive";
import { PortfolioAccordionHeader } from "./directives/portfolio-accordion-header.directive";
import { PortfolioAccordionItem } from "./directives/portfolio-accordion-item.directive";
import { PortfolioAccordionTitle } from "./directives/portfolio-accordion-title.directive";
import { PortfolioAccordionComponent } from "./portfolio-accordion.component";

@NgModule({
  declarations: [
    PortfolioAccordionComponent,
    PortfolioAccordionItem,
    PortfolioAccordionContent,
    PortfolioAccordionTitle,
    PortfolioAccordionHeader
  ],
  imports: [CommonModule],
  exports: [
    PortfolioAccordionComponent,
    PortfolioAccordionItem,
    PortfolioAccordionContent,
    PortfolioAccordionTitle,
    PortfolioAccordionHeader
  ]
})
export class PortfolioAccordionModule {}
