import { Developer } from './developer.model';
import { Publisher } from './publisher.model';
import { GameXrefGenre } from './game-xref-genre.model';

export interface Game {

  gameId: number,
  name: string,
  description: string,
  publisherId: number,
  developerId: number,
  developer: Developer,
  publisher: Publisher,
  gameXrefGenre: GameXrefGenre

}
