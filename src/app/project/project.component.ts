import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Swiper, Navigation, Pagination} from 'swiper/core';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterViewInit {
  swiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.project_container', {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
}
