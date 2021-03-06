import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Publisher } from './models/publisher.model';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  private url: string = 'http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/publishers';

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]> {

    return this.http.get<Publisher[]>(this.url);

  }

  getPublisher(id: number): Observable<Publisher> {

    return this.http.get<Publisher>(this.url + '/' + id);

  }

  addPublisher(publisher: Publisher): Observable<any> {

    return this.http.post(this.url, publisher);

  }

  updatePublisher(publisher: Publisher): Observable<any> {

    return this.http.put(this.url + '/' + publisher.publisherId, publisher);

  }

  deletePublisher(id: number): Observable<any> {

    return this.http.delete(this.url + '/' + id);

  }

}
