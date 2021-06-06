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
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentSumm: string;
  public foundSumm: boolean;
  public loading: boolean;
  public accId: string;
  public summoner: Summoner;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.currentSumm = route.snapshot.paramMap.get('id');
    this.loading = true;
    this.loadSumm();
   }

  public async loadSumm() {
    try {
      const url = '//cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.currentSumm + '?api_key=RGAPI-e0eb6e09-1b68-4703-9114-f588232614ce'
      const result = await this.http.get<Summoner>(url).toPromise();
      this.summoner = result
      this.foundSumm = true;
      this.loading = false;
    } catch (error) {
      this.foundSumm = false;
      this.loading = false;
    }
      console.log(this.currentSumm)
      console.log(this.summoner)
    } 

  public async saveInfo() {

  }

  ngOnInit() {
  }

}
