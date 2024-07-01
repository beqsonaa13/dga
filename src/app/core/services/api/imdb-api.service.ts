import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { MovieModel } from "../../models/movie.model";

@Injectable({providedIn: 'root'})
export class ImdbApiService {
  constructor(
    private readonly http: HttpClient
  ) { }

  public getMovies(title: string): Observable<MovieModel[]> {
    return this.http.get<{results: MovieModel[]}>(
      `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc`
    ).pipe(map(data => data.results));
  };
}
