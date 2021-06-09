import {Component, OnInit} from '@angular/core';
import {Home} from './home';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppConfigService, private home: Home) {
  }

  homeItems = [
    {url: '#', icon: 'uil-linkedin-alt'},
    {url: '#', icon: 'uil-github-alt'},
    {url: '#', icon: 'uil-twitter-alt'}
  ];

  // tslint:disable-next-line:typedef
  showHomeResource() {
    this.appService.getHomeResource().subscribe((data: Home) => this.home = data);
  }

  ngOnInit(): void {
    this.showHomeResource();
  }

}
