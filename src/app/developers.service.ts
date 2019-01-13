import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  private url: string = "http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/developers";

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<any> {

    return this.http.get(this.url);

  }

  getDeveloper(id: number): Observable<any> {

    return this.http.get(this.url + '/' + id);

  }


}
