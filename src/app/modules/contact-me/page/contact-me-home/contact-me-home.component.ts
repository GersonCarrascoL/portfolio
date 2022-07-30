import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PortfolioLinksFindMe } from '@shared/constants/portfolio-links-find-me.const';
import { IPortfolioContactMeForm } from '@shared/interfaces/portfolio-contact-me-form.interface';

import { ContactService } from '@shared/services/contact.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'portfolio-contact-me-home',
  templateUrl: './contact-me-home.component.html',
  styleUrls: ['./contact-me-home.component.scss'],
  providers: [DatePipe]
})
export class ContactMeHomeComponent implements OnInit {
  contactForm: FormGroup;
  public collapsing: boolean = true;
  public personalLinksFindMe = PortfolioLinksFindMe;
  public isLoading$: Subject<boolean>;
  public messageSend: boolean = false;
  public isSuccess: boolean = false;
  public now: Date = new Date();
  public date: string | null;
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private contactService: ContactService
  ) {
    this.isLoading$ = new Subject();
  }

  ngOnInit(): void {
    this.initForm();
    this.date = this.datePipe.transform(this.now, 'dd/MM/yyyy');
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      date: null
    })
  }

  get form() {
    return this.contactForm.value;
  }

  async onSubmitForm(form: IPortfolioContactMeForm) {
    this.isLoading$.next(true);
    try {
      await this.contactService.addContactForm(form);
      this.isSuccess = true;
    } catch (error) {
      this.isSuccess = false;
    } finally {
      this.messageSend = true;
      this.isLoading$.next(false);
    }
  }

  onResendMessage() {
    this.contactForm.reset();
    this.initForm();
    this.messageSend = false;
    this.isSuccess = false;
  }
}
