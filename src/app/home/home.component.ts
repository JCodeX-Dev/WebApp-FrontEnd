import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  homeItems = [
    {url: '#', icon: 'uil-linkedin-alt'},
    {url: '#', icon: 'uil-github-alt'},
    {url: '#', icon: 'uil-twitter-alt'}
  ];

  ngOnInit(): void {
  }

}
