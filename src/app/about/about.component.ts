import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {About} from './about';
import {apiResource} from '../../environments/environment';

// import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About;
  image: any;

  constructor(private appService: AppConfigService) {
  }

  // tslint:disable-next-line:typedef
  showAboutResource() {
    this.appService.getAboutResource().subscribe((data: About) => this.about = {
      description: data.description,
    });
  }

  // tslint:disable-next-line:typedef
  showFileResource(section) {
    this.appService.getFileResource(section).subscribe((resp) => {
      const fileURL = URL.createObjectURL(resp.image);
      const element = document.getElementById('cv');
      element.setAttribute('href', fileURL);
      element.setAttribute('download', resp.filename);
    });
  }

  // tslint:disable-next-line:typedef
  showImageResource(section) {
    this.appService.getFileResource(section).subscribe((res) => {
      const fileURL = URL.createObjectURL(res.image);
      const element = document.getElementById('imga');
      element.setAttribute('src', fileURL);
    });
  }

  ngOnInit(): void {
    this.showAboutResource();
    this.showImageResource(apiResource.about + '/image');
    this.showFileResource(apiResource.about + '/resume');
  }

}
