import { Component, OnInit } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.page.html',
  styleUrls: ['./champ.page.scss'],
})
export class ChampPage implements OnInit {

  public favChamps = this.favchampsService.favChamps;
  constructor(private favchampsService: FavchampsService) { }

  slidecamp ={
    slidesPerView: 'auto',
    concenteredSlides:true,
    spaceBetween: 10
  };

  ngOnInit() {
  }

}
