import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PublishersService } from '../publishers.service';
import { Publisher } from '../models/publisher.model';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  publishers: Publisher[];

  constructor(private publisherService: PublishersService) { }

  ngOnInit(): void {

    this.loadPublishers();

  }

  addPublisher(name: string):void {

    let newPublisher = {
      publisherId: 0,
      name: name,
      game: []
    } as Publisher;

    this.publisherService.addPublisher(newPublisher).subscribe(_ => {
      this.loadPublishers();
    });

  }

  deletePublisher(publisher: Publisher): void {

    this.publisherService.deletePublisher(publisher.publisherId)
    .subscribe( _ => {
      this.loadPublishers();
    });

  }
  loadPublishers() {

    this.publisherService.getPublishers()
      .subscribe((data) => {
        this.publishers = data;
      });

  }

}
