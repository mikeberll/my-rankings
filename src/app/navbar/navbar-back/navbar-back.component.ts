///////////////////////////////////////////////
/* Navbar for:
create-match
edit-profile
*/
///////////////////////////////////////////////


import { Component, Input, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.scss']
})
export class NavbarBackComponent implements OnInit {

  @Input()
  title = "";

  constructor(private navbarService : NavbarServiceService) {
    
   }

  ngOnInit(): void {
  }

}
