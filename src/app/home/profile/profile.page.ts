import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiInvocador } from 'src/app/modulos/apiInvocador.module';

export interface Invocador{
  id : string;
  acount_id : string;
  nome : string;
  profileIconId: number;
  summonerLevel : string;
  revisionDate : number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {
  
  public summoner;
  public invocadorId: string;
  public invocadorNome: string;
  public id_conta: string;
  public nivel_invocador: number;
  
  public currentSummoner: string;

  constructor(private route: ActivatedRoute, private invocador: apiInvocador) {
    this.currentSummoner = route.snapshot.paramMap.get('id');
}

public async saveInfo(){

  this.invocadorId = this.invocador.data[this.currentSummoner].id;
  this.id_conta = this.invocador.data[this.currentSummoner].acount_id;
  this.invocadorNome = this.invocador.data[this.currentSummoner].invocadorNome;
  this.nivel_invocador = this.invocador.data[this.currentSummoner].summonerLevel;
  this.summoner= {
   nome: this.invocadorNome,
   id: this.id_conta,
   link: 'home/inicio/' + this.invocadorId
  };
}

  ngOnInit() {
  }

}
