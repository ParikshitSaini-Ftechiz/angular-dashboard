import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/toggle.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  clicked: boolean = false;
  notification: boolean = false;
  items: MenuItem[] = [];
  constructor(private _service: ToggleService) {}

  trigermenu() {
    this.clicked = !this.clicked;
    this._service.clicked.next(this.clicked);
  }
  ngOnInit(): void {
    this.items = [
      {
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-fw  pi-user',
          },
          {
            label: 'Setting',
            icon: 'pi pi-fw pi-cog',
          },
          {
            separator: true,
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
          },
        ],
      },
    ];
  }
}
