import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  clicked = new Subject<boolean>();

  constructor() {}
}
