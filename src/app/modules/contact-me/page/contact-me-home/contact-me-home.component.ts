import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PortfolioLinksFindMe } from '@shared/constants/portfolio-links-find-me.const';
import { IPortfolioContactMeForm } from '@shared/interfaces/portfolio-contact-me-form.interface';

@Component({
  selector: 'portfolio-contact-me-home',
  templateUrl: './contact-me-home.component.html',
  styleUrls: ['./contact-me-home.component.scss']
})
export class ContactMeHomeComponent implements OnInit {
  contactForm : FormGroup;
  public collapsing = true;
  public personalLinksFindMe = PortfolioLinksFindMe;
  public messageSend = false;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    })
  }

  onSubmitForm(form: IPortfolioContactMeForm) {
    console.log(form);
    this.messageSend = true;
  }

  onResendMessage() {
    this.contactForm.reset();
    this.messageSend = false;
  }
}
