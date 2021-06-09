import {Component, HostListener, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Footer} from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private appService: AppConfigService, private footer: Footer) {
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
    this.appService.getFooterResource().subscribe((data: Footer) => this.footer = {
      name: data.name,
      github: data.github,
      stackoverflow: data.stackoverflow,
      instagram: data.instagram,
      linkedin: data.linkedin,
      twitter: data.twitter
    });
  }

  ngOnInit(): void {
    this.showFooterResource();
  }

}
