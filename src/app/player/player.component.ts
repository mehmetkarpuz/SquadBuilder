import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerName: string = "Player1";

  constructor() { }

  ngOnInit() {
  }

}
