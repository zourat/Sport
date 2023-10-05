import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  teamsTab: any = [];
  teamId: any;
  constructor(private X: FormBuilder,
    private teamService: TeamService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (response) => {
        this.teamsTab = response.teams;
        console.log(this.teamsTab)
      }
    )
    this.playerForm = this.X.group({
      name: ['', [Validators.minLength(4), Validators.required]],
      age: [''],
      nbr: [''],
      position: [''],
    })
  }
  addOrEditePlayer() {
    console.log("Form Value :", this.playerForm.value)
    this.playerForm.value.teamId = this.teamId;
    console.log("Object To Save :", this.playerForm.value)
    this.playerService.addPlayer(this.playerForm.value).subscribe(
      (response) => {
        console.log("here is message : ", response);
      }
    )
  }

  getTeamId(event) {
    this.teamId = event.target.value;
    console.log(this.teamId);
  }
}
