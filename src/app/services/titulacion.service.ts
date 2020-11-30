
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { titulacionInt } from '../interfaces/titulacion.interface';


@Injectable({
  providedIn: 'root'
})
export class TitulacionService {
  titulacion :titulacionInt [];
  cargando=true;

  constructor(private http: HttpClient) {
    this.cargatitulacion();
   }

  private cargatitulacion(){
    this.http.get('https://angular-portfolio-bb9c7.firebaseio.com/titulacion.json')
    .subscribe((resp:titulacionInt[])=>{
      this.titulacion= resp;
      this.cargando=false;
  });
    
  }
}
