import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPortfolioContactMeForm } from '@shared/interfaces/portfolio-contact-me-form.interface';

@Component({
  selector: 'contact-me-form',
  templateUrl: './contact-me-form.component.html',
  styleUrls: ['./contact-me-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactMeFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() public isLoading: boolean;

  @Output() onSubmit: EventEmitter<IPortfolioContactMeForm>;
  constructor() {
    this.onSubmit = new EventEmitter<IPortfolioContactMeForm>();
  }

  ngOnInit(): void { }

  get contactMeForm() {
    return this.form.controls;
  }

  onContactMe() {
    this.onSubmit.emit(this.form.value);
  }
}
