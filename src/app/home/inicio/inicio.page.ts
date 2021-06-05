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

  public currentSearch = '';
  public result: apiInvocador = null;
  public loading = false;


  constructor(
    private invocador: InvocadorService
  ) { }

    public async busca(){
      this.loading = true;
      try {
        this.result = await this.invocador.buscarInvocador(this.currentSearch);
        } catch (e){
          this.result = {
            invocador:[]
          };
        }
        this.loading = false;
    }

}




