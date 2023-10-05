import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PalyersComponent } from './components/palyers/palyers.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';


const routes: Routes = [
  {path : "", component : HomeComponent},  //http://localhost:4200/ => loginComponent will be displayed
  {path: "login", component : LoginComponent},
  {path : "signup", component : SinupComponent},
  {path : "signupAdmin", component : SinupComponent},
  {path : "allMatches", component : MatchesComponent},
  {path : "allPlayers", component : PalyersComponent},
  {path : "allTeams", component : TeamsComponent},
  {path : "matchForm", component : MatchFormComponent},
  {path : "playerForm", component : PlayerFormComponent},
  {path : "addTeam", component : AddTeamComponent},
  {path : "editTeam", component : EditTeamComponent},
  {path : "admin", component : AdminComponent},
  {path : "matchInfo/:id", component : MatchInfoComponent},
  {path : "editMatches/:id", component : MatchFormComponent },
  {path : "search", component : SearchComponent },
  {path : "addStadium", component : AddStadiumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
