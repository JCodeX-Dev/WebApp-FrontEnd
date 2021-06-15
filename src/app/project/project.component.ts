import {Component, OnInit} from '@angular/core';
import {Navigation, Pagination, Swiper} from 'swiper/core';
import {AppConfigService} from '../app-config.service';
import {Project} from './project';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  swiper: Swiper;

  project: Project[];
  constructor(private appService: AppConfigService) {
  }

  // tslint:disable-next-line:typedef
  showSwiper() {
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


  // tslint:disable-next-line:typedef
  showProjectResource() {
    this.appService.getProjectResource().subscribe((data: Project[]) => this.project = data);
  }

  ngOnInit(): void {
    this.showSwiper();
    this.showProjectResource();
  }

}
