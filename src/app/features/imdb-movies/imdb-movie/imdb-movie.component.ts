import { NgIf } from "@angular/common";
import { Component, Input } from '@angular/core';
import { MatButton } from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { MovieModel } from "../../../core/models/movie.model";

@Component({
  selector: 'app-imdb-movie',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatButton,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    NgIf
  ],
  templateUrl: './imdb-movie.component.html',
  styleUrl: './imdb-movie.component.scss'
})
export class ImdbMovieComponent {
  @Input() public movie!: MovieModel;
}
