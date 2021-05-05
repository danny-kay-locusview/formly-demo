import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  toggleSideNav$: Subject<any> = new Subject<any>();

  constructor() {}

  public toggleSideNav() {
    this.toggleSideNav$.next();
  }
}
