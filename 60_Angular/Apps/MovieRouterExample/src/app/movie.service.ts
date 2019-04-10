import { Injectable } from '@angular/core';
import { Movie } from './Shared/Movie';
import { MOCK_MOVIES } from './Shared/MockMovies';

@Injectable()
export class MovieService {

  public getMovies(): Movie[] { return MOCK_MOVIES; }
  
  public getMovie(title: string): Movie {
    return MOCK_MOVIES.find(movie => movie.Title === title);
  }
}
