import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-leagues',
  templateUrl: './user-leagues.component.html',
  styleUrls: ['./user-leagues.component.scss']
})
export class UserLeaguesComponent implements OnInit {

  id = 10;

  constructor() { }

  ngOnInit(): void {
  }

  printConsole() {
    console.log("success!");
  }

}
