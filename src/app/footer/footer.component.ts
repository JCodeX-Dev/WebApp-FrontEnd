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
    this.appService.getFooterResource().subscribe((data: Footer) => this.footer = data);
  }

  ngOnInit(): void {
    this.showFooterResource();
  }

}
