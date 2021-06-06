import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.page.html',
  styleUrls: ['./champ.page.scss'],
})
export class ChampPage {

  champfav:any;
  nome:string;
  photo:string;
  link:string;
  isFavorite:boolean;

  constructor(private storage: Storage) {
    this.refreshFav();
   }

  slidecamp ={
    slidesPerView: 'auto',
    concenteredSlides:true,
    spaceBetween: 10
  };

  public refreshFav() {
    this.storage.get('favorites')
    .then((res:any) => {
      if (res) {
      res = res[0]
      this.champfav = res,
      this.nome = res.nome,
      this.photo = res.photo,
      this.link = res.link,
      this.link != null? this.isFavorite = true: this.isFavorite = false
      }}) 
  }

  doRefresh( event ) {
    setTimeout(() => {
      this.refreshFav();
      event.target.complete();
    }, 1500 );
  }

}
