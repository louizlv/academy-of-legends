import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInvocador } from '../modulos/apiInvocador.module';


@Injectable({
  providedIn: 'root'
})
export class InvocadorService {


  constructor(private http: HttpClient) { }



  public buscarInvocador(busca: string) {
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${busca}?api_key=RGAPI-62955169-6207-41a1-b320-8a9c8b968319`

    return this.http.get<apiInvocador>(url, {
      headers: {
        "Accept-Language": "pt-BR, pt; q = 0,9, en-US; q = 0,8, en; q = 0,7 ",
        " Accept-Charset ": " application / x-www-form-urlencoded; charset = UTF-8 ",
        " Origem ": " https://developer.riotgames.com "
      }
    }
    ).toPromise();
  }



}



