import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  // menuItems = [
  //   {linkId: 1, linkName: 'Home', linkUrl: '#home'},
  //   {linkId: 2, linkName: 'About', linkUrl: '#about'},
  //   {linkId: 3, linkName: 'Skills', linkUrl: '#skills'},
  //   {linkId: 4, linkName: 'Projects', linkUrl: '#projects'},
  //   {linkId: 5, linkName: 'Blogs', linkUrl: '#blogs'},
  //   {linkId: 6, linkName: 'Contact', linkUrl: '#contact'}
  // ];


  /*===== MENU SHOW =====*/
  // tslint:disable-next-line:typedef
  showNav() {
    document.getElementById('nav-menu').classList.add('show-menu');
  }

  /*===== MENU HIDDEN =====*/
  // tslint:disable-next-line:typedef
  closeNav(){
    document.getElementById('nav-menu').classList.remove('show-menu');
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  @HostListener('click', [])
  // tslint:disable-next-line:typedef
  onClick(){
    const navLink = document.querySelectorAll('.nav_link');
    // tslint:disable-next-line:typedef
    function linkAction(){
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
  }

  // @HostListener('window:scroll', [])
  // // tslint:disable-next-line:typedef
  // onWindowScroll() {
  //   const offset = window.pageYOffset;
  //   if (offset > 100) {
  //     document.querySelector('header').classList.add('nv-sc');
  //     document.querySelector(':root').setAttribute('style','--nav-color: #fff');
  //   } else {
  //     document.querySelector('header').classList.remove('nv-sc');
  //     document.querySelector(':root').setAttribute('style','--nav-color: #035a6d');
  //   }
  // }
  ngOnInit(): void {
  }
}
