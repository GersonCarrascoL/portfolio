import { trigger, state, style, transition, animate } from "@angular/animations";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from "@angular/core";
import { memoize } from "lodash-es";
import { PortfolioAccordionItem } from "./directives/portfolio-accordion-item.directive";

@Component({
  selector: "portfolio-accordion",
  templateUrl: "./portfolio-accordion.component.html",
  styleUrls: ["./portfolio-accordion.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({height: '*', opacity: 1, visibility: 'visible'})),
      state('collapsed', style({height: '0px', opacity: 0, visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class PortfolioAccordionComponent {
  expanded = new Set<number>();
  @Input() collapsing = true;
  @ContentChildren(PortfolioAccordionItem) items: QueryList<PortfolioAccordionItem>;

  getToggleState = memoize((index: number) => {
    return this.toggleState.bind(this, index);
  })

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };
}
