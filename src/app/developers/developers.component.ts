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

  constructor(
    private developerService: DevelopersService,
  ) { }

  ngOnInit(): void {

    this.loadDevelopers();

  }

  addDeveloper(name: string):void {

    let newDeveloper = {
      developerId: 0,
      name: name,
      game: []
    } as Developer;

    this.developerService.addDeveloper(newDeveloper).subscribe( _ => {
      this.loadDevelopers();
    });

  }

  deleteDeveloper(developer: Developer): void {

    this.developerService.deleteDeveloper(developer.developerId)
    .subscribe(_ => {
      this.loadDevelopers();
    });

  }

  loadDevelopers() {

    this.developerService.getDevelopers()
    .subscribe((data) => {
      this.developers = data;
    });

  }

}
