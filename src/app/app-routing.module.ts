import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LeagueContainerComponent } from './league/league-container.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-match', component: CreateMatchComponent },
  { path: 'all-leagues', component: AllLeaguesComponent },
  /* { path: 'league/:id', component: LeagueContainerComponent }, */ // id in url
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-your-league', component: CreationFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
