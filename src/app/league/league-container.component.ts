import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar/navbar-service.service';

@Component({
  selector: 'app-league-container',
  templateUrl: './league-container.component.html',
  styleUrls: ['./league-container.component.scss']
})
export class LeagueContainerComponent implements OnInit {

  constructor(private navbarService : NavbarServiceService) {}

  ngOnInit(): void {
    this.navbarService.selectNavbarLeague();
  }

}
