import { Injectable } from '@angular/core';
import { Servicios } from '../interfaces/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getServices(): Servicios[] {
    return [
      { title: 'servicio', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', dateFooter: 'ultima actualizacion 18 de Abril 2021', image: 'https://www.solayramonabogados.com/wp-content/uploads/2020/12/SERVICIOS-ABOGADOS-ZARAGOZA-768x768.png' },
      { title: 'servicio', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', dateFooter: 'ultima actualizacion 18 de Abril 2021', image: 'https://www.solayramonabogados.com/wp-content/uploads/2020/12/SERVICIOS-ABOGADOS-ZARAGOZA-768x768.png' },
      { title: 'servicio', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', dateFooter: 'ultima actualizacion 18 de Abril 2021', image: 'https://www.solayramonabogados.com/wp-content/uploads/2020/12/SERVICIOS-ABOGADOS-ZARAGOZA-768x768.png' },
    ];
  }
}
