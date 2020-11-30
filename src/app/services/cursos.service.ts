import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cursoInt } from '../interfaces/curso.interface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos:cursoInt[];
  cursosFilt:cursoInt[];
  cargando=true;

  constructor(private http: HttpClient) {
    this.cargarCursos();
  }

  private cargarCursos(){
    return new Promise((resolve,reject)=>{
      //Promesas para que no filtre y todavia no se ha recibido
        this.http.get('https://angular-portfolio-bb9c7.firebaseio.com/cursos.json')
        .subscribe((resp:cursoInt[])=>{
          this.cursos= resp;
          this.cargando=false;
          resolve();
     });
    });
  }
   public getCurso(id: number){
    //Creo este observable
    return this.http.get(`https://angular-portfolio-bb9c7.firebaseio.com/cursos/${id}.json`)
  }

  public buscarCursos(texto:string){
    //Promesas para que no filtre y todavia no se ha recibido
      if (this.cursos.length===0){
         this.cargarCursos().then(()=>{
           this.filtrarCursos(texto);
         })
      }else{
       this.filtrarCursos(texto);
     }
   }


public filtrarCursos(texto:string){
  //Promesas para que no filtre y todavia no se ha recibido
     this.cursosFilt=this.cursos.filter((data)=>{
     for (let cur in data) {
       //console.log(`${property}${data[property]}`.toUpperCase());
      if (`${cur}${data[cur]}`.toUpperCase().indexOf(texto.toUpperCase())!=-1){
        return data;
      }
     }
    }).concat();  
 };
}

