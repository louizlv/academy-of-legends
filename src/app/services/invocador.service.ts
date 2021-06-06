import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInvocador } from '../modulos/apiInvocador.module';


@Injectable({
  providedIn: 'root'
})
export class InvocadorService {


  constructor(private http: HttpClient) { }



  public buscarInvocador(busca: string) {
<<<<<<< HEAD
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${busca}?api_key=RGAPI-62955169-6207-41a1-b320-8a9c8b968319`
=======
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${busca}?api_key=RGAPI-5efa1247-49ef-400c-9181-9749404211d6`
>>>>>>> 522adbc9223c88164b72f6854a210beb50d7b126

    return this.http.get<apiInvocador>(url).toPromise();
  }



}



