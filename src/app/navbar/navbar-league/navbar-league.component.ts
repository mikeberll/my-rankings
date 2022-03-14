import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';

interface SectionOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar-league',
  templateUrl: './navbar-league.component.html',
  styleUrls: ['./navbar-league.component.scss']
})

export class NavbarLeagueComponent implements OnInit {

  section_options: SectionOptions[] = [
    {value: '', viewValue: 'Ranking'},
    {value: 'match-history', viewValue: 'Match History'},
    {value: 'admin-section', viewValue: 'Admin Section'},
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changeLeagueSection(option : MatOptionSelectionChange<string>) {
    console.log(option.source.value);
    this.router.navigate(['/league/:id/' + option.source.value]);

  }

}
