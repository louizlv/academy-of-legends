import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { apiInvocador } from '../modulos/apiInvocador.module';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InvocadorService {

  private apiUrl = 'https://br1.api.riotgames.com/tft/summoner/v1/';
  private key = 'RGAPI-62955169-6207-41a1-b320-8a9c8b968319';


  constructor(private http:HttpClient, public toastController: ToastController) { }

  buscarInvocador(busca : string): Observable<apiInvocador>{
    const url = `${this.apiUrl}summoners/by-name/${this.key}${busca}`;

    return this.http.get<apiInvocador>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.mostrarErro(erro)));
  }

  async mostrarErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao pesquisar a Api.',
      duration: 2000,
      color : 'danger',
      position : 'middle'
    });
    toast.present();
    return null;
  }

}
