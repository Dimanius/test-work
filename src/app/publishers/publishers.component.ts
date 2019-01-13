import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PublishersService } from '../publishers.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  publishers: any = [];

  constructor(private publisherService: PublishersService) { }

  ngOnInit() {
    this.publisherService.getPublishers()
      .subscribe((data) => {
        this.publishers = data;
      });
  }

}
