import moment from "moment";

export interface CalendarDay {
  date: moment.Moment;
  isCurrentMonth: boolean;
  isToday: boolean;
  isHoliday: boolean;
}
