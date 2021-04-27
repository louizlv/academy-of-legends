import { Component } from '@angular/core';

import _ from 'lodash';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  players: Array<{nome:string, tag:string}>;
  allPlayers:any;
  queryText: string;

  constructor(){
    this.queryText = '';
    this.players = [
      { nome: 'Caiodiass', tag: '#24'},
      { nome: 'Comèdia', tag: '#BR1'},
      { nome: 'LouizLV', tag: '#EUW'},
      { nome: 'NevesGameTARG', tag: '#777'}
    ];

    this.allPlayers = this.players;
  }

  filterPlayer(play: any){
    let val = play.target.value;
    if (val && val.trim() != ''){
      this.players = _.values(this.allPlayers);
      this.players = this.players.filter((player) => {
        return (player.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.players = null;
    }
  }

  public inSearch = false;
  public setinSearch(value: boolean) {
    this.inSearch = value;
  }
}
