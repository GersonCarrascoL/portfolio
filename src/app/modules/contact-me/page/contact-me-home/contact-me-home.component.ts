import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PortfolioLinksFindMe } from '@shared/constants/portfolio-links-find-me.const';
import { IPortfolioContactMeForm } from '@shared/interfaces/portfolio-contact-me-form.interface';

@Component({
  selector: 'portfolio-contact-me-home',
  templateUrl: './contact-me-home.component.html',
  styleUrls: ['./contact-me-home.component.scss'],
  providers: [DatePipe]
})
export class ContactMeHomeComponent implements OnInit {
  contactForm : FormGroup;
  public collapsing = true;
  public personalLinksFindMe = PortfolioLinksFindMe;
  public messageSend = false;
  public now = new Date();
  public date: string | null;
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.init();
    this.date = this.datePipe.transform(this.now, 'dd/MM/yyyy');
  }

  private init() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    })
  }

  get form() {
    return this.contactForm.value;
  }
  onSubmitForm(form: IPortfolioContactMeForm) {
    this.messageSend = true;
  }

  onResendMessage() {
    this.contactForm.reset();
    this.messageSend = false;
  }
}
