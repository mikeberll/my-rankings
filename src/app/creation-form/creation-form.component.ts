import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar/navbar-service.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent implements OnInit {

  constructor(private navbarService: NavbarServiceService) {
    navbarService.selectNavbarBack();
   }

  ngOnInit(): void {
  }

}
