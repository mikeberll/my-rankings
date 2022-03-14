import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent implements OnInit {

  // 1 home
  // 2 back
  // 3 league
  // 4 search
  navbar_selector : number;
  title : string;


  constructor(private navbarService : NavbarServiceService) {
    this.navbar_selector = 1;
    this.title = "";

    navbarService.navbarSelectorEmitter.subscribe((val) => {
      console.log(val);
      this.navbarService.navbarBackTitleEmitter.subscribe((val) => {
        console.log("HERE");
        this.title = val;
      });
      this.navbar_selector = val;
    });
  } 

  ngOnInit(): void {


    
  }

}
