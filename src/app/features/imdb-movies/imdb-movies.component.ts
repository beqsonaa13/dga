import { NgForOf } from "@angular/common";
import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { Subject, takeUntil } from "rxjs";
import { MovieModel } from "../../core/models/movie.model";
import { ImdbApiService } from "../../core/services/api/imdb-api.service";
import { LoadingService } from "../../core/services/loading.service";
import {
  BasicNotificationDialogComponent
} from "../../shared/components/basic-notification-dialog/basic-notification-dialog.component";
import { ImdbMovieComponent } from "./imdb-movie/imdb-movie.component";

@Component({
  selector: 'app-imdb-movies',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    ImdbMovieComponent,
    NgForOf,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './imdb-movies.component.html',
  styleUrl: './imdb-movies.component.scss'
})
export class ImdbMoviesComponent implements OnDestroy {
  public searchControl = new FormControl('Batman');
  public movies: MovieModel[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly imdbApiService: ImdbApiService,
    private readonly dialog: MatDialog,
    private readonly loadingService: LoadingService
  ) {}

  public getMovies() {
    const searchValue = this.searchControl.value;
    if (searchValue) {
      this.loadingService.show();
      this.imdbApiService.getMovies(searchValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe(movies => {
          this.movies = movies;
          this.loadingService.hide();
        });
    } else {
      this.dialog.open(BasicNotificationDialogComponent, {
        data: {
          title: 'შეტყობინება',
          message: 'ჩაწერეთ ფილმის სახელი'
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
