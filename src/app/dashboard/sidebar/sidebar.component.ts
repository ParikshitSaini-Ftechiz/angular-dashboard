import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  clicked: boolean = false;
  dropdown: string = '';
  constructor(private _service: ToggleService) {
    this._service.clicked.subscribe((res: boolean) => {
      this.clicked = res;
    });
  }


  opendropdown(dropdown: string) {
    this.dropdown = dropdown;
  }

  ngOnInit(): void { }
}
