import { Component, OnInit } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-ahri',
  templateUrl: './ahri.page.html',
  styleUrls: ['./ahri.page.scss'],
})
export class AhriPage {

  public champhere;
  
  constructor(private favchampsService: FavchampsService) {
      this.champhere = 
        {nome: 'AHRI', 
        photo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', 
        link: '/home/champ/ahri'}; 
  }

  public addFavorite() {
    this.favchampsService.favoritados.length = 0;
    this.favchampsService.favoritados.push(this.champhere);
    this.favchampsService.update();
  }

}
