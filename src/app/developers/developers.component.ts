import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DevelopersService } from '../developers.service';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  developers: Developer[];

  constructor(private developerService: DevelopersService) { }

  ngOnInit(): void {

    this.developerService.getDevelopers()
      .subscribe((data) => {
        this.developers = data;
      });

  }

  addDeveloper(name: string):void {

    let data = {
      developerId: 0,
      name: name,
      game: []
    } as Developer;

    this.developerService.addDeveloper(data);

  }

}
