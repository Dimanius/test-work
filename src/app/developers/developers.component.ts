import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DevelopersService } from '../developers.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  developers: any = [];

  constructor(private developerService: DevelopersService) { }

  ngOnInit() {

    this.developerService.getDevelopers()
      .subscribe((data) => {
        this.developers = data;
      });

  }

}
