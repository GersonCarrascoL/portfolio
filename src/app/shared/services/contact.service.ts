import { Injectable } from "@angular/core";
import { addDoc, collection, Firestore } from "@angular/fire/firestore";
import { IPortfolioContactMeForm } from "@shared/interfaces/portfolio-contact-me-form.interface";
import { Timestamp } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private fireStore: Firestore) {}

  addContactForm(form: IPortfolioContactMeForm) {
    form.date = new Date();
    const contactRef = collection(this.fireStore, 'contact-form');
    return addDoc(contactRef, form);
  }
}
