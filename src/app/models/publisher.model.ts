import { Game } from './game.model';

export interface Publisher {

  publisherId: number,
  name: string,
  game?: Game[]

}
