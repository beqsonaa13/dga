import { HttpInterceptorFn } from '@angular/common/http';

export const imdbInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('online-movie')) {
    req = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', '4aedc542a5mshefd1be829325f79p126bf9jsn683bdfbd80a2')
    });
  }
  return next(req);
};
