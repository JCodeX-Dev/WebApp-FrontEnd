import {Component, OnInit} from '@angular/core';
import {Home} from './home';
import {AppConfigService} from '../app-config.service';
import {map} from 'rxjs/operators';
import {apiResource} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: Home;

  constructor(private appService: AppConfigService) {
  }

  homeItems$;

  // tslint:disable-next-line:typedef
  showHomeResource() {
    this.homeItems$ = this.appService.getHomeResource().pipe(map((data: Home) => {
      this.home = data;
      return [
        {url: this.home.linkedin, icon: 'uil-linkedin-alt'},
        {url: this.home.github, icon: 'uil-github-alt'},
        {url: this.home.twitter, icon: 'uil-twitter-alt'}
      ];
    }));
  }

  // tslint:disable-next-line:typedef
  showImageResource(section) {
    this.appService.getFileResource(section).subscribe((res) => {
      const fileURL = URL.createObjectURL(res.image);
      const element = document.getElementById('imgh');
      element.setAttribute('href', fileURL);
    });
  }

  ngOnInit(): void {
    this.showHomeResource();
    this.showImageResource(apiResource.home + '/image');
  }

}
