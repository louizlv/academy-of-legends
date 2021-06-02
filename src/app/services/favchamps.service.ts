import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class FavchampsService {

public favoritados = [];

public update() {
  this.storage.set('favorites', this.favoritados);
}

private async loadFavs(){
  const loadedFavs = await this.storage.get('favorites');
  if (loadedFavs) {
    this.favoritados.push(...loadedFavs);
  }
}

constructor(private storage: Storage) { 
  this.loadFavs();
}
}

