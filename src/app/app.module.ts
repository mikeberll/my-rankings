import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarContainerComponent } from './navbar/navbar-container/navbar-container.component';
import { NavbarHomeComponent } from './navbar/navbar-home/navbar-home.component';
import { NavbarBackComponent } from './navbar/navbar-back/navbar-back.component';
import { NavbarLeagueComponent } from './navbar/navbar-league/navbar-league.component';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';
import { HomeComponent } from './home/home.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { LeagueContainerComponent } from './league/league-container.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from './home/user-info/user-info.component';
import { UserStatsComponent } from './home/user-stats/user-stats.component';
import { UserLeaguesComponent } from './home/user-leagues/user-leagues.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { HelpComponent } from './help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatOptionModule } from '@angular/material/core';
import { LeagueModule } from './league/league.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarContainerComponent,
    NavbarHomeComponent,
    NavbarBackComponent,
    NavbarLeagueComponent,
    NavbarSearchComponent,
    HomeComponent,
    CreateMatchComponent,
    LeagueContainerComponent,
    EditProfileComponent,
    AllLeaguesComponent,
    LoginComponent,
    SidebarComponent,
    UserInfoComponent,
    UserStatsComponent,
    UserLeaguesComponent,
    CreationFormComponent,
    HelpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    LeagueModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
