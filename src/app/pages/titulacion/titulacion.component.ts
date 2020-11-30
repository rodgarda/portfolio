import { Component, OnInit } from '@angular/core';
import { TitulacionService}  from '../../services/titulacion.service';
@Component({
  selector: 'app-titulacion',
  templateUrl: './titulacion.component.html',
  styleUrls: ['./titulacion.component.css']
})
export class TitulacionComponent implements OnInit {

  constructor(public titulacionServ:TitulacionService) {  }

  ngOnInit(): void {
  }

}
