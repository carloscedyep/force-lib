import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'force-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input()
  daySelect: Date;

  @Output()
  clickEvent = new EventEmitter<Date>();

  constructor() {}

  date: Date;
  calendar: any[] = [];
  monthName: string;
  year: number;
  weekday: number;
  options = {
    month: 'long',
  };

  ngOnInit(): void {
    this.date = new Date();
    this.changeDate(this.date);
    if (this.daySelect != undefined && this.daySelect.toString().length > 0) {
      this.selectDay(this.daySelect.getDate().toString());
    }
  }

  changeDate(date: Date) {
    this.calendar = [];

    var y = date.getFullYear(),
      m = date.getMonth();
    var lastDay = new Date(y, m + 1, 0).getDate();

    this.year = date.getFullYear();
    this.monthName = date
      .toLocaleDateString('es-MX', this.options)
      .toUpperCase();
    this.weekday = new Date(y, m, 1).getDay();

    for (var i = 2; i <= lastDay; i++) {
      this.calendar.push(i.toString());
    }

    for (var i = lastDay + this.weekday + 1; i <= 42; i++) {
      this.calendar.push('');
    }
  }

  addMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    this.changeDate(this.date);
  }

  restMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
    this.changeDate(this.date);
  }

  isToday(day: string) {
    if (day != undefined && day.length > 0) {
      var dayEval = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        Number.parseInt(day)
      );
      var today = new Date();
      today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      return dayEval.getTime() == today.getTime();
    } else {
      return false;
    }
  }

  isDateSelected(day: string) {
    if (this.daySelect != undefined) {
      var dayEval = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        Number.parseInt(day)
      );
      return dayEval.getTime() == this.daySelect.getTime();
    } else {
      return false;
    }
  }

  isWeekend(day: string) {
    if (day != undefined && day.length > 0) {
      var dayEval = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        Number.parseInt(day)
      );
      return [0, 6].includes(dayEval.getDay());
    } else {
      return false;
    }
  }

  selectDay(day: string) {
    if (day != undefined && day.length > 0) {
      var newDate = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        Number.parseInt(day)
      );
      if (newDate) {
        this.daySelect = new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          Number.parseInt(day)
        );
        this.clickEvent.emit(this.daySelect);
      }
    }
  }
}
