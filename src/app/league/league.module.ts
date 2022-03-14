import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingComponent } from './ranking/ranking.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { LeagueRoutingModule } from './league-routing.module';



@NgModule({
  declarations: [RankingComponent,
    MatchHistoryComponent,
    AdminSectionComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
