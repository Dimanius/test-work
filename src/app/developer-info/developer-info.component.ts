import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DevelopersService } from '../developers.service';

@Component({
  selector: 'app-developer-info',
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.scss']
})
export class DeveloperInfoComponent implements OnInit {

  developer: any = {};

  constructor(
    private developerService: DevelopersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.developerService.getDeveloper(this.route.params['value'].id)
      .subscribe((data) => {
        this.developer = data;
        console.log(this.developer);
      });

  }

}
