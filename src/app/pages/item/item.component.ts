import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AptitudesService } from '../../services/aptitudes.service';
//import { JornadasService } from '../../services/jornadas.service.';
//import { jornadasInt} from '../interfaces/jornadas.interface';
import { cursoInt } from '../../interfaces/curso.interface';
import { aptitudesInt } from '../../interfaces/aptitudes.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  componente:string;  
  curso: cursoInt;
  aptitud: aptitudesInt;
  id: number;
  
  constructor(private route: ActivatedRoute, 
    public cursoServ: CursosService,
    public aptitudServ: AptitudesService) { }

  ngOnInit(): void {
      this.route.params
      .subscribe((parametros)=>{
          //Me suscribe a ese servicio
        this.componente=parametros['componente'];
        this.id=parametros['id'];
        this.gimeItem(this.componente,this.id);       
      });
    }


    gimeItem(component,iditem){
        if(component=='cursos'){
          if (iditem>this.cursoServ.cursos.length-1){
            iditem=0
          }else if(iditem<0){
            iditem=this.cursoServ.cursos.length-1
          }
          this.cursoServ.getCurso(iditem)
          .subscribe((cursoGet:cursoInt)=>{
              this.curso=cursoGet;
              this.id=iditem;
            });
        }else if(component=='aptitudes'){
          if (iditem>this.aptitudServ.aptitudes.length-1){
            iditem=0
          }else if(iditem<0){
            iditem=this.aptitudServ.aptitudes.length-1
          }
          this.aptitudServ.getAptitud(iditem)
          .subscribe((aptitudGet:aptitudesInt)=>{
              this.aptitud=aptitudGet;
              this.id=iditem;
            });
        }
      }



}
