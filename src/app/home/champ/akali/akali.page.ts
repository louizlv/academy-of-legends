import { Component, OnInit } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-akali',
  templateUrl: './akali.page.html',
  styleUrls: ['./akali.page.scss'],
})
export class AkaliPage {

  public champhere;
  
  constructor(private favchampsService: FavchampsService) {
      this.champhere = 
        {nome: 'AKALI', 
        photo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', 
        link: '/home/champ/akali'}; 
  }

  public addFavorite() {
    this.favchampsService.favoritados.length = 0;
    this.favchampsService.favoritados.push(this.champhere);
    this.favchampsService.update();
    console.log(this.favchampsService.favoritados)
  }

}
