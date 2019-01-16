import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DevelopersService } from '../developers.service';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer-info',
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.scss']
})
export class DeveloperInfoComponent implements OnInit {

  developer: Developer = {
    developerId: 0,
    name: '',
    game: []
  };

  constructor(
    private developerService: DevelopersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.developerService.getDeveloper(this.route.params['value'].id)
      .subscribe((data) => {
        this.developer = data;
      });

  }

}
