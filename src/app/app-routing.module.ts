import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GenresComponent } from './genres/genres.component';
import { DevelopersComponent } from './developers/developers.component';
import { DevelopersEditComponent } from './developers-edit/developers-edit.component';
import { DeveloperInfoComponent } from './developer-info/developer-info.component';
import { PublishersComponent } from './publishers/publishers.component';
import { PublisherInfoComponent } from './publisher-info/publisher-info.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:id',
    component: GameInfoComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'developers/:id',
    component: DeveloperInfoComponent
  },
  {
    path: 'publishers',
    component: PublishersComponent
  },
  {
    path: 'publishers/:id',
    component: PublisherInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
