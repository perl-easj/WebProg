import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../Shared/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies: Movie[];

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() { 
    this.movies = this.movieService.getMovies(); 
  }

   public onSelect(movie: Movie) {
    this.router.navigate(['/movie-detail', movie.Title]);
  }
}
