import {AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor() {
  }

  /*==================== DARK LIGHT THEME ====================*/
  ngAfterViewInit(): void {
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

      const nav = document.getElementById('header');
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (offset >= 80) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    });
  }

  /*==================== DARK LIGHT THEME ====================*/
  // tslint:disable-next-line:typedef
  changeTheme() {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  }
}
