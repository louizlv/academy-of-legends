import { Component } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  players: Array<{ nick: string }>;
  allplayers: any;
  queryText: string;


  constructor() {
    this.queryText = "";
    this.players = [
      { nick: "coomediante" },
      { nick: "NevesGameTARG" }
    ];

    this.allplayers = this.players;
  }

  filterPlayer(play: any) {
    let val = play.target.value;
    if (val && val.trim() != '') {
      this.players = _.values(this.allplayers);
      this.players = this.players.filter((player) => {
        return (player.nick.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    } else {
      this.players = this.allplayers;
    }




  }


}
