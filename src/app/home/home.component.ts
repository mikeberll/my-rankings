import { Component, OnInit } from '@angular/core';
import { NavbarSearchComponent } from '../navbar/navbar-search/navbar-search.component';
import { NavbarServiceService } from '../navbar/navbar-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navbarService : NavbarServiceService) {}

  ngOnInit(): void {
    this.navbarService.selectNavbarHome();
  }

}
