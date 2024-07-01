import { NgClass, NgForOf } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardTitle } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import moment from "moment";
import { CalendarDay } from "../../core/models/calenday-day.model";

@Component({
  selector: 'app-current-calendar',
  standalone: true,
  imports: [MatGridListModule, MatCard, MatCardTitle, NgForOf, NgClass],
  templateUrl: './current-calendar.component.html',
  styleUrl: './current-calendar.component.scss'
})
export class CurrentCalendarComponent implements OnInit {
  public weeks: CalendarDay[][] = [];
  public currentMonth!: string;
  public weekDays: string[] = [];
  private currentMonthHolidays = [13, 25];

  ngOnInit(): void {
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const startOfMonth: moment.Moment = moment().startOf('month');
    const endOfMonth: moment.Moment = moment().endOf('month');
    this.currentMonth = moment().format('MMMM YYYY');

    this.weekDays = moment.weekdaysShort();

    const days: CalendarDay[] = [];

    const startOfFirstWeek: moment.Moment = startOfMonth.clone().startOf('week');
    const endOfLastWeek: moment.Moment = endOfMonth.clone().endOf('week');

    let day: moment.Moment = startOfFirstWeek;

    while (day <= endOfLastWeek) {
      const isCurrentMonth = day.month() === startOfMonth.month();
      days.push({
        date: day.clone(),
        isCurrentMonth,
        isToday: day.isSame(moment(), 'day'),
        isHoliday: isCurrentMonth && this.currentMonthHolidays.includes(day.date())
      });
      day = day.add(1, 'day');
    }

    this.weeks = [];
    while (days.length) {
      this.weeks.push(days.splice(0, 7));
    }
  }

  public getFlatDays(): CalendarDay[] {
    return this.weeks.reduce((acc: CalendarDay[], week: CalendarDay[]) => acc.concat(week), []);
  }
}
