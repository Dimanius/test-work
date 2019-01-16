import { Genre } from './genre.model';

export interface GameXrefGenre {

  gameId: number,
  genreId: number,
  genre: Genre[]

}
