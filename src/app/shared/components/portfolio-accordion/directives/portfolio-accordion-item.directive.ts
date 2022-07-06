import { ContentChild, Directive, Input } from "@angular/core";
import { PortfolioAccordionContent } from "./portfolio-accordion-content.directive";
import { PortfolioAccordionHeader } from "./portfolio-accordion-header.directive";
import { PortfolioAccordionTitle } from "./portfolio-accordion-title.directive";

@Directive({
  selector: "accordion-item"
})
export class PortfolioAccordionItem {
  @Input() title = "";
  @Input() disabled = false;
  @ContentChild(PortfolioAccordionContent) content: PortfolioAccordionContent;
  @ContentChild(PortfolioAccordionTitle) customTitle: PortfolioAccordionTitle;
  @ContentChild(PortfolioAccordionHeader) customHeader: PortfolioAccordionHeader;
}
