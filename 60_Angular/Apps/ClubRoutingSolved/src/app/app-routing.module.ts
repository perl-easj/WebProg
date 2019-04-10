import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'player/:no', component: PlayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
