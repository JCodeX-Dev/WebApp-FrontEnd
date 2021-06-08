import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  apiEndpoint = baseURL + profile;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getHeaderData() {
    return this.http.get<Header>(this.apiEndpoint + apiResource.header).pipe(retry(3), catchError(this.handleError));
    // tap( // Log the result or error
    //   data => this.log(filename, data),
    //   error => this.logError(filename, error)
    // )
  }

  // tslint:disable-next-line:typedef
  getHomeData() {
    return this.http.get<Home>(this.apiEndpoint + apiResource.home).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getAboutData() {
    return this.http.get<About>(this.apiEndpoint + apiResource.about).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getSkillsData() {
    return this.http.get<Skills>(this.apiEndpoint + apiResource.skills).pipe(retry(3), catchError(this.handleError));
  }

// tslint:disable-next-line:typedef
  getQualificationsData() {
    return this.http.get<Qualifications>(this.apiEndpoint + apiResource.qualifications).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getProjectsData() {
    return this.http.get<Projects>(this.apiEndpoint + apiResource.projects).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getBlogsData() {
    return this.http.get<Blogs>(this.apiEndpoint + apiResource.blogs).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getContactData() {
    return this.http.get<Contact>(this.apiEndpoint + apiResource.contact).pipe(retry(3), catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  getFooterData() {
    return this.http.get<Footer>(this.apiEndpoint + apiResource.footer).pipe(retry(3), catchError(this.handleError));
  }


  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
