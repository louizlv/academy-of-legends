import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInvocador } from '../modulos/apiInvocador.module';


@Injectable({
  providedIn: 'root'
})
export class InvocadorService {


  constructor(private http: HttpClient) { }



  public buscarInvocador(busca: string) {
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${busca}?api_key=RGAPI-5efa1247-49ef-400c-9181-9749404211d6`

    return this.http.get<apiInvocador>(url).toPromise();
  }



}



