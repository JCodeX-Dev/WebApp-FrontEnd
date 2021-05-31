import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  modalShow(modalView){
      modalView.classList.add('active-modal');
  }

  // tslint:disable-next-line:typedef
  modalClose(){
    const modalViews = document.querySelectorAll('.blog_modal');
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  }

  ngOnInit(): void {
  }

}
