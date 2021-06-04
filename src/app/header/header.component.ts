import {AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
    // const sections = document.querySelectorAll('section[id]');
    //
    // // tslint:disable-next-line:typedef
    // function scrollActive(){
    //   const scrollY = window.pageYOffset;
    //
    //   sections.forEach(current => {
    //     const sectionHeight = current.scrollHeight;
    //     const sectionTop = current.scrollTop - 50;
    //     let sectionId = current.getAttribute('id');
    //
    //     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    //       document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    //     }else{
    //       document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    //     }
    //   });
    // }
    // window.addEventListener('scroll', scrollActive);
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
  closeNav() {
    document.getElementById('nav-menu').classList.remove('show-menu');
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  @HostListener('click', [])
  // tslint:disable-next-line:typedef
  onClick() {
    const navLink = document.querySelectorAll('.nav_link');

    // tslint:disable-next-line:typedef
    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));
  }

  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const offset = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(current => {
      const section = document.getElementById(current.getAttribute('id'));
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (offset > sectionTop && offset <= (sectionTop + sectionHeight)) {
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  }
}
