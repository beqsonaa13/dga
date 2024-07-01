import { DatePipe } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { imdbInterceptor } from "./core/interceptors/imdb.interceptor";
import { loadingInterceptor } from "./core/interceptors/loading.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([imdbInterceptor])),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    DatePipe
  ]
};
