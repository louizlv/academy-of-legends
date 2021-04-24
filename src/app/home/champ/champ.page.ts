import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.page.html',
  styleUrls: ['./champ.page.scss'],
})
export class ChampPage implements OnInit {

  constructor() { }

  lutador ={
    slidesPerView: 'auto',
    concenteredSlides:true,
    spaceBetween: 10
  };

  ngOnInit() {
  }

}
