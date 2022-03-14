import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { NavbarServiceService } from '../navbar/navbar-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  leaguePlayers: string[] = ['Marco', 'Roberto', 'Giulio', 'Maria', 'Giorgia'];
  selectedPlayers: string[];

  title = "Create Match";

  constructor(private navbarService : NavbarServiceService,
              private router: Router) {
    this.selectedPlayers = [];
  }

  ngOnInit(): void {
    this.navbarService.selectNavbarBack();
    this.navbarService.navbarBackTitle(this.title);
  }

  manageSelectedPlayer(player : string) {
    console.log("Managing selected players");
    if (this.selectedPlayers.indexOf(player) === -1) {
      console.log(player + "will be added");
      this.selectedPlayers.push(player);
    }
    else {
      console.log(player + "will be removed");
      this.selectedPlayers.splice(this.selectedPlayers.indexOf(player), 1);
    }

  }

  onSubmit(form : NgForm) {
    console.log(form);
    var winners = 0;
    for (let selected of form.value.winners) {
      if (this.selectedPlayers.indexOf(selected) === -1) {
        console.log("Should never happen");
      }
      else {
        winners++;
      }
    }
    var losers = this.selectedPlayers.length - winners;
    console.log("There are " + winners + " winners");
    console.log("There are " + losers + " losers");
    console.log("Points are : " + form.value.points);
    // this.router.navigate(['/']);
    if ((winners === 0) || (this.selectedPlayers.length == 0) || (losers == 0)) {
      this.alertError();
    }
    else if (winners === losers) {
      this.alertConfirmationEqual();
    }
    else {
      this.alertConfirmationNotEqual();
    }
  }

  alertError() {
    Swal.fire({
      title: 'Error by your registration',
      text: 'you need to insert at least 1 winner and 1 user',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'Ok'
    })
  }

  alertConfirmationEqual() {
    Swal.fire({
      title: 'Confirm result registration',
      text: 'This process is irreversible.',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Registered!', 'Your game has been registered successfully.', 'success');
        this.router.navigate(['/']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your registration has been stopped', 'error');
      }
    });
  }

  alertConfirmationNotEqual() {
    Swal.fire({
      title: 'Confirm result registration',
      text: 'Winners and losers are not equal. Do you still want to confirm? The team with less players will get double the points calculation.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Registered!', 'Your game has been registered successfully.', 'success');
        this.router.navigate(['/']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your registration has been stopped', 'error');
      }
    });
  }

}
