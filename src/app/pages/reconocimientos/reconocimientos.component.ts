import { Component, OnInit } from '@angular/core';
import { ReconocimientosService} from '../../services/reconocimientos.service'

@Component({
  selector: 'app-reconocimientos',
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.css']
})
export class ReconocimientosComponent implements OnInit {

  constructor(public reconServ: ReconocimientosService) { }

  ngOnInit(): void {
  }

}
