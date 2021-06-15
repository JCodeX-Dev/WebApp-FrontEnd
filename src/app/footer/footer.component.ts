import {Component, HostListener, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Footer} from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: Footer;
  footerItems;
  constructor(private appService: AppConfigService) {
  }

  // SHOW SCROLL UP
  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }

  // tslint:disable-next-line:typedef
  showFooterResource(){
      this.appService.getFooterResource().subscribe((data: Footer) => {
      this.footer = data;
      this.footerItems = [
        {url: this.footer.linkedin, icon: 'bxl-linkedin'},
        {url: this.footer.twitter, icon: 'bxl-twitter'},
        {url: this.footer.instagram, icon: 'bxl-instagram'},
        {url: this.footer.stackoverflow, icon: 'bxl-stack-overflow'},
        {url: this.footer.github, icon: 'bxl-github'}
      ];
    });
  }

  ngOnInit(): void {
    this.showFooterResource();
  }

}
