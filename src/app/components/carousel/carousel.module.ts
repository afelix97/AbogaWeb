import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImgsComponent } from './carousel-imgs/carousel-imgs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CarouselImgsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports:[
    CarouselImgsComponent
  ]
})
export class CarouselModule {}
