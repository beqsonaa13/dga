import { DatePipe } from "@angular/common";
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  private datePipe = inject(DatePipe);

  transform(value: string): string {
    const iso8601Pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{7}Z$/;
    if (!value || !iso8601Pattern.test(value)) return value;

    const date = new Date(value);
    return this.datePipe.transform(date, 'HH:mm:ss MMM dd yyyy') || value;
  }

}
