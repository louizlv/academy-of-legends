import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Champion {
id: number;
nome: string;
photo: string;
link: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavchampsService {

public favChamps: Champion[] = [
  {id: 1,
  nome: 'AATROX',
  photo: 'https://lolg-cdn.porofessor.gg/img/champion-icons/11.8/64/266.png', 
  link: '/home/champ/aatrox'},
]

public findChamp(id: number) {
  return { ...this.favChamps.find(s => s.id === id)}
}

public update(champ: Champion) {
  const index = this.favChamps.findIndex(s => s.id = champ.id);
  this.favChamps[index] = champ;
  this.storage.set('favchamps', this.favChamps);
}

  constructor(private storage: Storage) { }
}
