import { Component } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-aatrox',
  templateUrl: './aatrox.page.html',
  styleUrls: ['./aatrox.page.scss'],
})
export class AatroxPage {

  public champhere;
  
  constructor(private favchampsService: FavchampsService) {
      this.champhere = 
        {nome: 'AATROX', 
        photo: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', 
        link: '/home/champ/aatrox'}; 
  }

  public addFavorite() {
    this.favchampsService.favoritados.length = 0;
    this.favchampsService.favoritados.push(this.champhere);
    this.favchampsService.update();
    console.log(this.favchampsService.favoritados)
  }

}
