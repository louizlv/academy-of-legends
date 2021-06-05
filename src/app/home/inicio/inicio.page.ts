import { Component } from '@angular/core';
import _ from 'lodash';
import { apiInvocador } from 'src/app/modulos/apiInvocador.module';
import { InvocadorService } from 'src/app/services/invocador.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  invocador: apiInvocador;


  constructor(
    public invocadorService: InvocadorService
  ) { }
  buscarInvocador(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim()! == '') {
      this.invocadorService.buscarInvocador(busca).subscribe(dados => {
        console.log(dados)
        this.invocador = dados;
      }
      )
    }
  }
}
 

