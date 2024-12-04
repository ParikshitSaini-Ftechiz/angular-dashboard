import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-book-appointments',
  templateUrl: './book-appointments.component.html',
  styleUrls: ['./book-appointments.component.scss'],
})
export class BookAppointmentsComponent implements OnInit {
  selectedCity: City | undefined;
  date: Date | undefined;
  cities: City[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
