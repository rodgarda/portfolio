import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
@Component({
  selector: 'app-cursosindex',
  templateUrl: './cursosindex.component.html',
  styleUrls: ['./cursosindex.component.css']
})
export class CursosindexComponent implements OnInit {

  constructor(public cursoServ:CursosService) { }

  ngOnInit(): void {
  }

}
