import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reconInt } from '../interfaces/reconocimientos.interface';

@Injectable({
  providedIn: 'root'
})
export class ReconocimientosService {
  recon: reconInt[];
  cargando=true;

  constructor(private http: HttpClient) {
    this.cargarRecon();
   }

   private cargarRecon(){
      //Promesas para que no filtre y todavia no se ha recibido
      this.http.get('https://angular-portfolio-bb9c7.firebaseio.com/reconocimientos.json')
        .subscribe((resp: reconInt[])=>{
          this.recon= resp;
          this.cargando=false;
     });
   }


}
