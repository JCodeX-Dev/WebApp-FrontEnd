import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiResource, baseURL, profile} from '../environments/environment';
import {Header} from './header/header';
import {Home} from './home/home';
import {About} from './about/about';
import {Skills} from './skill/skills';
import {Qualifications} from './qualification/qualifications';
import {Projects} from './project/projects';
import {Blogs} from './blog/blogs';
import {Contact} from './contact/contact';
import {Footer} from './footer/footer';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  apiEndpoint = baseURL + profile;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getHeaderData(){
    return this.http.get<Header>(this.apiEndpoint + apiResource.header);
  }

  // tslint:disable-next-line:typedef
  getHomeData(){
    return this.http.get<Home>(this.apiEndpoint + apiResource.home);
  }

  // tslint:disable-next-line:typedef
  getAboutData(){
    return this.http.get<About>(this.apiEndpoint + apiResource.about);
  }

  // tslint:disable-next-line:typedef
  getSkillsData(){
    return this.http.get<Skills>(this.apiEndpoint + apiResource.skills);
  }

// tslint:disable-next-line:typedef
  getQualificationsData(){
    return this.http.get<Qualifications>(this.apiEndpoint + apiResource.qualifications);
  }

  // tslint:disable-next-line:typedef
  getProjectsData(){
    return this.http.get<Projects>(this.apiEndpoint + apiResource.projects);
  }

  // tslint:disable-next-line:typedef
  getBlogsData(){
    return this.http.get<Blogs>(this.apiEndpoint + apiResource.blogs);
  }

  // tslint:disable-next-line:typedef
  getContactData(){
    return this.http.get<Contact>(this.apiEndpoint + apiResource.contact);
  }

  // tslint:disable-next-line:typedef
  getFooterData(){
    return this.http.get<Footer>(this.apiEndpoint + apiResource.footer);
  }
}
