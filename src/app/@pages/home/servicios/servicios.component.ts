import { Component, OnInit } from '@angular/core';
import { Servicios } from '../interfaces/servicios';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  services:Servicios[] = [];
  constructor(private readonly serviciosService:ServiciosService) { }

  ngOnInit(): void {
    this.services = this.serviciosService.getServices();
  }

}
