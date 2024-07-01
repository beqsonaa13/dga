import { Component } from '@angular/core';
import { MatTabsModule } from "@angular/material/tabs";
import { RouterOutlet } from '@angular/router';
import { CompanyJobComponent } from "./features/company-job/company-job.component";
import { CurrentCalendarComponent } from "./features/current-calendar/current-calendar.component";
import { DateFormatterComponent } from "./features/date-formatter/date-formatter.component";
import { ImdbMoviesComponent } from "./features/imdb-movies/imdb-movies.component";
import { SearchComponent } from "./features/search/search.component";
import { LoadingComponent } from "./shared/components/loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTabsModule,
    ImdbMoviesComponent,
    LoadingComponent,
    DateFormatterComponent,
    CurrentCalendarComponent,
    SearchComponent,
    CompanyJobComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dga-tasks';
}
