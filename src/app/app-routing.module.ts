import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent }  from './games/games.component';
import { GameInfoComponent }  from './game-info/game-info.component';
import { DevelopersComponent }  from './developers/developers.component';
import { PublishersComponent }  from './publishers/publishers.component';

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
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'publishers',
    component: PublishersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
