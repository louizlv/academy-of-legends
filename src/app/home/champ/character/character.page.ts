
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';
import { ActivatedRoute } from '@angular/router';

export interface Character {
  data:    Data;
}
export interface Data {
  [key:string]: ChampInfo;
}
export interface ChampInfo {
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
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage {

  public champhere;
  public character: Character;
  public currentChamp: string;

  public champName: string;
  public champPhoto: string;
  public champId: string;
  
  constructor(private favchampsService: FavchampsService, private http: HttpClient, private route: ActivatedRoute) {
      this.currentChamp = route.snapshot.paramMap.get('id');
      this.loadChamp();
  }

  public addFavorite() {
    this.favchampsService.favoritados.length = 0;
    this.favchampsService.favoritados.push(this.champhere);
    this.favchampsService.update();
  }

 public async saveInfo() {
    this.champName = this.character.data[this.currentChamp].name;
    this.champPhoto = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.character.data[this.currentChamp].id + '_0.jpg';
    this.champId = this.character.data[this.currentChamp].id;
    this.champhere = 
    {nome: this.champName, 
    photo: this.champPhoto, 
    link: '/home/champ/character/' + this.champId}; 
  }

  public async loadChamp() {
    const url = 'http://ddragon.leagueoflegends.com/cdn/11.11.1/data/pt_BR/champion/' + this.currentChamp + '.json';
    const result = await this.http.get<Character>(url).toPromise();
    this.character = result;
    this.saveInfo();
    } 

}

