import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Developer } from './models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  private url: string = "http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/developers";

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<Developer[]> {

    return this.http.get<Developer[]>(this.url);

  }

  getDeveloper(id: number): Observable<Developer> {

    return this.http.get<Developer>(this.url + '/' + id);

  }


}
