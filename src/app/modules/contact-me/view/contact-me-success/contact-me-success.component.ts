import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contact-me-success',
  templateUrl: './contact-me-success.component.html',
  styleUrls: ['./contact-me-success.component.scss']
})
export class ContactMeSuccessComponent implements OnInit {
  @Output() resendNewMessage: EventEmitter<void>;
  @Input() isSuccess: boolean;
  constructor() {
    this.resendNewMessage = new EventEmitter();
  }

  ngOnInit(): void { }

  onResend() {
    this.resendNewMessage.emit();
  }
}
