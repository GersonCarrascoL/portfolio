import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[accordionContent]"
})
export class PortfolioAccordionContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
