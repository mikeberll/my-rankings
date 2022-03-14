import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sidenavEmitter = new EventEmitter<boolean>();

  constructor() { }

  openSidenav() {
    console.log("Request to open sidenav");
    this.sidenavEmitter.emit(true);
  }

  closeSidenav() {
    console.log("Request to close sidenav");
    this.sidenavEmitter.emit(false);
  }
}
