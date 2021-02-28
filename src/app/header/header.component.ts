import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'Home', linkUrl: '#home'},
    {linkId: 2, linkName: 'About', linkUrl: '#about'},
    {linkId: 3, linkName: 'Projects', linkUrl: '#projects'},
    {linkId: 4, linkName: 'Blogs', linkUrl: '#blogs'},
    {linkId: 5, linkName: 'Contact', linkUrl: '#contact'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const offset = window.pageYOffset;
    if (offset > 100){
      document.querySelector('header').classList.add('nv-sc');
    }
    else {
      document.querySelector('header').classList.remove('nv-sc');
    }
      }

}
