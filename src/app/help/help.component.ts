import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar/navbar-service.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private navbarService: NavbarServiceService) {
    navbarService.selectNavbarBack();
   }

  ngOnInit(): void {
  }

}
