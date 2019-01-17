import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PublishersService } from '../publishers.service';
import { Publisher } from '../models/publisher.model';

@Component({
  selector: 'app-publisher-info',
  templateUrl: './publisher-info.component.html',
  styleUrls: ['./publisher-info.component.scss']
})
export class PublisherInfoComponent implements OnInit {

  publisher: Publisher = {
    publisherId: 0,
    name: '',
    game: []
  };

  constructor(
    private publisherService: PublishersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.loadPublisher();

  }

  updatePublisher(): void {

    this.publisherService.updatePublisher(this.publisher)
      .subscribe( _ => {
        this.loadPublisher();
      });

  }

  loadPublisher(): void {

    this.publisherService.getPublisher(this.route.params['value'].id)
      .subscribe((data) => {
        this.publisher = data;
      });

  }

}
