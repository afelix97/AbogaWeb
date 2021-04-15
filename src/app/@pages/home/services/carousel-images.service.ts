import { Injectable } from '@angular/core';
import { CarouselImages } from '../../../components/carousel/interfaces/carousel-images';

@Injectable({
  providedIn: 'root'
})
export class CarouselImagesService {

  constructor() { }

  getImagesCarousel(): CarouselImages[] {
    return [
      { title: 'Primer titulo imagen', subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imagenDesktop: 'https://mlcuj5q3gotu.i.optimole.com/hEFB9II-BAWgBl2I/w:auto/h:auto/q:auto/https://detectivesgpi.com/wp-content/uploads/2019/12/SERVICIOS-PARA-ABOGADOS.jpg' },
      { title: 'Segundo titulo imagen', subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imagenDesktop: 'https://mlcuj5q3gotu.i.optimole.com/hEFB9II-BAWgBl2I/w:auto/h:auto/q:auto/https://detectivesgpi.com/wp-content/uploads/2019/12/SERVICIOS-PARA-ABOGADOS.jpg' },
      { title: 'Tercer titulo imagen', subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imagenDesktop: 'https://mlcuj5q3gotu.i.optimole.com/hEFB9II-BAWgBl2I/w:auto/h:auto/q:auto/https://detectivesgpi.com/wp-content/uploads/2019/12/SERVICIOS-PARA-ABOGADOS.jpg' },
    ];
  }
}
