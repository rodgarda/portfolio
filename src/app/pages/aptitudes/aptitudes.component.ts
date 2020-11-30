import { Component, OnInit } from '@angular/core';
import { AptitudesService } from '../../services/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  constructor(public aptitudesServ:AptitudesService) { }

  ngOnInit(): void {
  }

}
