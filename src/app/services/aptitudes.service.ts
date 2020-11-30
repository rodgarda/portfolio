import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { aptitudesInt } from '../interfaces/aptitudes.interface';


@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  aptitudes :aptitudesInt [];
  aptitudesFilt: aptitudesInt[];
  cargando=true;

  constructor(private http: HttpClient) {
    this.cargaAptitudes();
   }

  private cargaAptitudes(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-portfolio-bb9c7.firebaseio.com/aptitudes.json')
      .subscribe((resp:aptitudesInt[])=>{
        this.aptitudes= resp;
        this.cargando=false;
        resolve();
      });
    });
  }

  public getAptitud(id: number){
    //Creo este observable
    return this.http.get(`http://angular-portfolio-bb9c7.firebaseio.com/aptitudes/${id}.json`)
    //return this.http.get('./assets/data/aptitudes.json')
  }

  public buscarAptitudes(texto:string ){
    if (this.aptitudes.length===0){
      this.cargaAptitudes().then(()=>{
        this.filtrarAptitudes(texto);
      });
    }else{
      this.filtrarAptitudes(texto);
    }
  }

  public filtrarAptitudes(texto: string){
    this.aptitudesFilt= this.aptitudes.filter((data)=>{
      for (let apt in data){
        if(`${apt}${data[apt]}`.toUpperCase().indexOf(texto.toUpperCase())!=-1){
          return data
        }
      }
    }).concat();
  };
}

