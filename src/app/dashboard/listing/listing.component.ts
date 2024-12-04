import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  constructor() {}
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {}
}
