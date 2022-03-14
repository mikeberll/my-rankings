import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  sidenav_open : boolean;

  constructor(private sidenavService : SidenavService) {
    this.sidenav_open = false;
    this.sidenavService.sidenavEmitter.subscribe((val) => {
      this.sidenav_open = val;
    })
   }

  ngOnInit(): void {
  }

  openSidenav() {
    this.sidenavService.openSidenav();
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }

}
