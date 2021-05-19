import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.page.html',
  styleUrls: ['./champ.page.scss'],
})
export class ChampPage implements OnInit {

  champfav:any;
  nome:string;
  photo:string;
  link:string;

  constructor(private storage: Storage) {
    this.storage.get('favorites')
    .then((res:any) => {
      res = res[0]
      this.champfav = res,
      this.nome = res.nome,
      this.photo = res.photo,
      this.link = res.link,
      console.log(this.champfav + ' ' + this.nome + ' ' + this.photo + ' ' + this.link)
      }) 
   }

  slidecamp ={
    slidesPerView: 'auto',
    concenteredSlides:true,
    spaceBetween: 10
  };

  ngOnInit() {
  }

}
