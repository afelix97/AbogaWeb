import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImages } from '../interfaces/carousel-images';

@Component({
  selector: 'app-carousel-imgs',
  templateUrl: './carousel-imgs.component.html',
  styleUrls: ['./carousel-imgs.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselImgsComponent implements OnInit {

  @Input() CarouselImages: CarouselImages[] = [];
  @Input() CarouselConfiguration: NgbCarouselConfig;

  constructor(private config: NgbCarouselConfig) {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //si no viene configuracion usa la de por defecto
    if (this.CarouselConfiguration) {
      this.config = this.CarouselConfiguration;
    } else {
      // customize default values of carousels used by this component tree
      this.config.interval = 2000;
      this.config.wrap = true;
      this.config.keyboard = true;
      this.config.pauseOnHover = true;
    }
  }

  ngOnInit(): void { }

}
