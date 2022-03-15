import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminSectionComponent } from './admin-section/admin-section.component';
import { LeagueContainerComponent } from './league-container.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: 'league/:id', component: LeagueContainerComponent,
  children: [
    { 
        path: '', 
        component: RankingComponent
    },
    {
        path: 'match-history',
        component: MatchHistoryComponent
    },
    {
        path: 'admin-section',
        component: AdminSectionComponent
    }
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }