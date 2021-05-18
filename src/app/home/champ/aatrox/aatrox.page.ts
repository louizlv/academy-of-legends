import { Component, OnInit } from '@angular/core';
import { FavchampsService } from 'src/app/services/favchamps.service';

@Component({
  selector: 'app-aatrox',
  templateUrl: './aatrox.page.html',
  styleUrls: ['./aatrox.page.scss'],
})
export class AatroxPage implements OnInit {

  public champhere = [
    {id: 1,
    nome: 'AATROX',
    photo: 'https://lolg-cdn.porofessor.gg/img/champion-icons/11.8/64/266.png', 
    link: '/home/champ/aatrox'},
  ]

  public favChamps = this.favchampsService.favChamps;
  constructor(private favchampsService: FavchampsService) { 
  }

  ngOnInit() {
  }

  onClick() {
    console.log("oi");
  }


}
