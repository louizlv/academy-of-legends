import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInvocador } from '../modulos/apiInvocador.module';


@Injectable({
  providedIn: 'root'
})
export class InvocadorService {

  constructor(private http: HttpClient) { }

  public buscarInvocador(busca: string) {
    const url = `//cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${busca}?api_key=RGAPI-e0eb6e09-1b68-4703-9114-f588232614ce`
    return this.http.get<apiInvocador>(url).toPromise();
  }}
  



