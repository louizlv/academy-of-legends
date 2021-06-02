import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

export interface Character {
  data:    Data;
}
export interface Data {
  Aatrox: Aatrox;
}
export interface Aatrox {
  id:          string;
  name:        string;
  title:       string;
  skins:       Skin[];
  lore:        string;
  tags:        string[];
  partype:     string;
  info:        Info;
  stats:       { [key: string]: number };
  spells:      Spell[];
  passive:     Passive;
}
export interface Info {
  attack:     number;
  defense:    number;
  magic:      number;
  difficulty: number;
}
export interface Passive {
  name:        string;
  description: string;
}
export interface Skin {
  id:      string;
  num:     number;
  name:    string;
  chromas: boolean;
}
export interface Spell {
  id:           string;
  name:         string;
  description:  string;
}


@Component({
  selector: 'app-aatrox',
  templateUrl: './aatrox.page.html',
  styleUrls: ['./aatrox.page.scss'],
})
export class AatroxPage {

  public champhere;
  public character: Character[];
  
  constructor(private favchampsService: FavchampsService, private http: HttpClient) {
      this.champhere = 
        {nome: 'AATROX', 
        photo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', 
        link: '/home/champ/aatrox'}; 
      this.loadChamp();
  }

  public async loadChamp() {
    const url = 'http://ddragon.leagueoflegends.com/cdn/11.11.1/data/pt_BR/champion/Aatrox.json';
    const result = await this.http.get<Character[]>(url).toPromise(); // converte em promise
    this.character = result;
    }
    
  public addFavorite() {
    this.favchampsService.favoritados.length = 0;
    this.favchampsService.favoritados.push(this.champhere);
    this.favchampsService.update();
  }

}
