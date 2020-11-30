import { Component, OnInit, OnDestroy,  EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cursoInt } from 'src/app/interfaces/curso.interface';
import { aptitudesInt } from 'src/app/interfaces/aptitudes.interface';
import { Router  } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { AptitudesService } from '../../services/aptitudes.service';
import { EstadobusquedaService } from 'src/app/services/estadobusqueda.service';
//import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {
  componente:string;
 // public subscription: Subscription;

  constructor(public route: ActivatedRoute,
    public cursosServ:CursosService,
    public aptitudesServ:AptitudesService,
    private router: Router,
    private estadobusquedaServ:EstadobusquedaService) { }

  ngOnInit(): void {

    this.estadobusquedaServ.publish(true);
    this.route.params
    .subscribe(params=>{
      this.componente=params['componente'];
      if(this.componente=="/cursos"){
        this.cursosServ.buscarCursos(params['termino']);
      }
      else if(this.componente=="/aptitudes"){
        this.aptitudesServ.buscarAptitudes(params['termino']);
      }

    })
  }
  ngOnDestroy(){
    this.estadobusquedaServ.publish(false);

  }
  returnPage(){
    this.router.navigate([this.componente]).then(()=>  {window.location.reload();});
  }
}

