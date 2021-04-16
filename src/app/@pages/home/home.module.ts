import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CarouselModule } from '@app/components/carousel/carousel.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';

@NgModule({
  declarations: [
    IndexHomeComponent,
    QuienesSomosComponent,
    MisionVisionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
