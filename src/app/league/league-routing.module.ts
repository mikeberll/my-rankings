import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminSectionComponent } from './admin-section/admin-section.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: 'league/:id', component: RankingComponent,
  children: [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }