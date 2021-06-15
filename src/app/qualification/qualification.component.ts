import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Qualification} from './qualification';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

  qualification: Qualification;
  constructor(private appService: AppConfigService) { }

  // tslint:disable-next-line:typedef
  toggleTab(tab, tabc){
    const tabs = document.querySelectorAll('.qualification_button');
    const tabContents = document.querySelectorAll('[data-content]');
    tabContents.forEach(tabContent => {
      tabContent.classList.add('qualification_inactive');
    });
    tabs.forEach(t => {
      t.classList.add('qualification_inactive');
    });
    tab.classList.remove('qualification_inactive');
    tabc.classList.remove('qualification_inactive');
  }

  // tslint:disable-next-line:typedef
  showQualificationResource(){
    this.appService.getQualificationResource().subscribe((data: Qualification) => this.qualification = data );
  }

  ngOnInit(): void {
    this.showQualificationResource();
  }

}
