import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[accordionHeader]"
})
export class PortfolioAccordionHeader {
  constructor(public templateRef: TemplateRef<any>) {}
}
