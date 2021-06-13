import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Blog} from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[];

  constructor(private appService: AppConfigService) {
  }

  // tslint:disable-next-line:typedef
  modalShow(modalView) {
    modalView.classList.add('active-modal');
  }

  // tslint:disable-next-line:typedef
  modalClose() {
    const modalViews = document.querySelectorAll('.blog_modal');
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  }

  // tslint:disable-next-line:typedef
  showBlogResource() {
    this.appService.getBlogResource().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }

  ngOnInit(): void {
    // this.showBlogResource();
  }

}
