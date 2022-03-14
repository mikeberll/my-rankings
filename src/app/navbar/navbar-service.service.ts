import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  navbarSelectorEmitter = new EventEmitter<number>();

  navbarBackTitleEmitter = new EventEmitter<string>();

  constructor() { }

  selectNavbarHome() {
    this.navbarSelectorEmitter.emit(1);
  }

  selectNavbarBack() {
    this.navbarSelectorEmitter.emit(2);
  }

  selectNavbarLeague() {
    this.navbarSelectorEmitter.emit(3);
  }

  selectNavbarSearch() {
    this.navbarSelectorEmitter.emit(4);
  }

  navbarBackTitle(title : string) {
    this.navbarBackTitleEmitter.emit(title);
  }

}
