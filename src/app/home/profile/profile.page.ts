import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
export interface Summoner {
  id:            string;
  accountId:     string;
  puuid:         string;
  name:          string;
  profileIconId: number;
  revisionDate:  number;
  summonerLevel: number;
}
export interface Mastery {
  championId:                   number;
  championLevel:                number;
}
export interface Mains {
  id:                      number;
  name:                    string;
  alias:                   string;
  squarePortraitPath:      string;
}
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 
  public summoner: Summoner;
  public masteries: Mastery;
  public currentSumm: string;
  public foundSumm: boolean;
  public loading: boolean;
  public accId: string;
  public mainsId = [];
  public main0: Mains;
  public main1: Mains;
  public main2: Mains;
 
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.currentSumm = route.snapshot.paramMap.get('id');
    this.loading = true;
    this.loadSumm();
   }
 
  public async loadSumm() {
    try {
      const urlacc = '//cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.currentSumm + '?api_key=RGAPI-c889606f-7895-466d-a665-69073423ac51'
      const resultacc = await this.http.get<Summoner>(urlacc).toPromise();
      this.summoner = resultacc
      this.foundSumm = true;
      this.takeMasteries();
    } catch (error) {
      this.foundSumm = false;
      this.loading = false;
    }
      console.log(this.currentSumm)
      console.log(this.summoner)
    } 
 
  public async takeMasteries() {
    this.accId = this.summoner.id
    const urlmaster = '//cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + this.accId + '?api_key=RGAPI-c889606f-7895-466d-a665-69073423ac51'
    const resultmaster = await this.http.get<Mastery>(urlmaster).toPromise();
    this.masteries = resultmaster
    console.log(this.masteries)
    console.log(urlmaster)
    this.takeMains();
  }
 
  public async takeMains() {
    this.mainsId[0] = this.masteries[0].championId;
    this.mainsId[1] = this.masteries[1].championId;
    this.mainsId[2] = this.masteries[2].championId;
    const urlmain0 = '//cors-anywhere.herokuapp.com/https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/' + this.mainsId[0] + '.json'
    const resultmain0 = await this.http.get<Mains>(urlmain0).toPromise();
    const urlmain1 = '//cors-anywhere.herokuapp.com/https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/' + this.mainsId[1] + '.json'
    const resultmain1 = await this.http.get<Mains>(urlmain1).toPromise();
    const urlmain2 = '//cors-anywhere.herokuapp.com/https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/' + this.mainsId[2] + '.json'
    const resultmain2 = await this.http.get<Mains>(urlmain2).toPromise();
    this.main0 = resultmain0
    this.main1 = resultmain1
    this.main2 = resultmain2
    console.log(this.main0.name)
    this.loading = false;
  }
 
  ngOnInit() {
  }
 
}