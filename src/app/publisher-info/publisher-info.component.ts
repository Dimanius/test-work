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

  publisher: Publisher;

  constructor(
    private publisherService: PublishersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.publisherService.getPublisher(this.route.params['value'].id)
      .subscribe((data) => {
        this.publisher = data;
      });

  }

}
