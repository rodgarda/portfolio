import { Component,  OnInit,  ViewChild } from '@angular/core';
import { Router  } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { EstadobusquedaService } from '../../services/estadobusqueda.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @ViewChild('txtBuscar',{static:false}) buscar: any;
  buscando: boolean;
  actualcomp: string;

  constructor(public _infoService : InfoPaginaService,
              private router: Router,
              private estadobusquedaServ:EstadobusquedaService) {
                this.buscando=false;
                estadobusquedaServ.event.subscribe((data) => {
                  this.buscando=data; // {data: 'some data'}
                });
              }  
  ngOnInit(){}
  buscarItems(value:string){
    if (value.length<1){
      return;
    }
    this.actualcomp =this.router.url;
    this.buscar.nativeElement.value="";
    this.router.navigate(['search',this.actualcomp,value],{ replaceUrl: true });
    //this.router.navigate([this.actualcomp]).then(()=>  { this.router.navigate(['search',this.actualcomp,value])});
    this.buscando=true
  }
  eliminarBusqueda(){
    this.router.navigate([this.actualcomp]).then(()=>  {window.location.reload();});
  }
}

