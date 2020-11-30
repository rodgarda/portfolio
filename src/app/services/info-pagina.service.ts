import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina;
  cargada: boolean = false;
  equipo: any[] = [];
  constructor(private http: HttpClient) {
    ///Leer informacion json de datos
      this.cargarInfo();
      this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('./assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.info = resp;
      this.cargada = true;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-portfolio-bb9c7.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
    });
  }
}

