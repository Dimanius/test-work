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

  publishers: Publisher[] = [];

  constructor(private publisherService: PublishersService) { }

  ngOnInit(): void {
    this.publisherService.getPublishers()
      .subscribe((data) => {
        this.publishers = data;
      });
  }

}
