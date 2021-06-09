import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {About} from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private appService: AppConfigService, private about: About) {
  }

  // tslint:disable-next-line:typedef
  showAboutResource() {
    this.appService.getAboutResource().subscribe((data: About) => this.about = {
      image: data.image,
      intro: data.intro,
      cv: data.cv
    });
  }

  ngOnInit(): void {
    this.showAboutResource();
  }

}
