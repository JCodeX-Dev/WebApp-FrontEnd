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

  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const sections = document.querySelectorAll('section[id]');
    const offset = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.clientHeight;
      const sectionTop = current.scrollTop;
      const sectionId = current.getAttribute('id') ;
      // console.log(sectionId);
      console.log(sectionId + ' ' + offset + ' ' + sectionTop + ' ' + sectionHeight);
      if (offset > sectionTop && offset <= (sectionTop + sectionHeight)){
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        console.log(true);
      } else {
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        console.log(false);
      }
    });
  //   if (offset > 100) {
  //     document.querySelector('header').classList.add('nv-sc');
  //     document.querySelector(':root').setAttribute('style','--nav-color: #fff');
  //   } else {
  //     document.querySelector('header').classList.remove('nv-sc');
  //     document.querySelector(':root').setAttribute('style','--nav-color: #035a6d');
  //   }
  }
  ngOnInit(): void {
  }
}
