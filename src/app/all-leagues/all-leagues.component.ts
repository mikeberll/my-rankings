import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar/navbar-service.service';

export interface Section {
  name: string;
  updated: number;
}

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.scss']
})

export class AllLeaguesComponent implements OnInit {

  folders: Section[] = [
    {
      name: 'Photos',
      updated: 1,
    },
    {
      name: 'Recipes',
      updated: 2,
    },
    {
      name: 'Work',
      updated: 3,
    },
  ];
  constructor(private navbarService : NavbarServiceService) {}

  ngOnInit(): void {
    this.navbarService.selectNavbarSearch();
  }

}
