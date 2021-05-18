import { Component, OnInit } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.page.html',
  styleUrls: ['./champ.page.scss'],
})
export class ChampPage implements OnInit {
  champfav: Array<{nome:string, photo:string, link:string}>;

  constructor(private favchampsService: FavchampsService) {
    this.champfav = this.favchampsService.favoritados;
   }

  slidecamp ={
    slidesPerView: 'auto',
    concenteredSlides:true,
    spaceBetween: 10
  };

  ngOnInit() {
  }

}
