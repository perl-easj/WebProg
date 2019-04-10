import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../Shared/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private movie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie(this.route.snapshot.paramMap.get('Title'));
  }

  public gotoMovies() {
    this.router.navigate(['/movie-list']);
  }
}
