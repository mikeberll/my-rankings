import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../navbar/navbar-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  title = "Edit Profile";

  constructor(private navbarService : NavbarServiceService) {
    this.navbarService.selectNavbarBack();
    this.navbarService.navbarBackTitle(this.title);
  }

  ngOnInit(): void {
    
  }

}
