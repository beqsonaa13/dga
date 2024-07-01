import { AsyncPipe, NgIf } from "@angular/common";
import { Component } from '@angular/core';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Observable } from "rxjs";
import { LoadingService } from "../../../core/services/loading.service";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  public loading$: Observable<boolean> = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
