import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DevelopersService } from '../developers.service';

@Component({
  selector: 'app-developers-edit',
  templateUrl: './developers-edit.component.html',
  styleUrls: ['./developers-edit.component.scss']
})
export class DevelopersEditComponent implements OnInit {

  developers: any = [];

  constructor(private developerService: DevelopersService) { }

  ngOnInit(): void {

    this.developerService.getDevelopers()
      .subscribe((data) => {
        this.developers = data;
      });

  }

}
