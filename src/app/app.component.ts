import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-rankings';
  sidenav_open : boolean;
  public sidebarShow: boolean = false;

  constructor(private sidenavService : SidenavService) {
    this.sidenav_open = false;
    this.sidenavService.sidenavEmitter.subscribe((val) => {
      this.sidebarShow = val;
    });

  }
}
