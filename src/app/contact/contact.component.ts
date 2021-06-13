import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor(private appService: AppConfigService) {
  }

  // tslint:disable-next-line:typedef
  showContactResource() {
    this.appService.getContactResource().subscribe((data: Contact) => this.contact = {
      phone: data.phone,
      email: data.email,
      location: data.location
    });
  }

  ngOnInit(): void {
    // this.showContactResource();
  }

}
