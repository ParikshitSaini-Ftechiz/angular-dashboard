import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import dayGrid from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, dayGrid],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      {
        title: 'Meeting',
        start: new Date(),
        prev: 'fa-solid fa-chevron-left',
        next: 'fa-solid fa-chevron-right',
        prevYear: 'chevrons-left', // double chevron
        nextYear: 'chevrons-right', // double chevron
      },
    ],
  };
}
