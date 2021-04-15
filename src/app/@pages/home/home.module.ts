import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CarouselModule } from '@app/components/carousel/carousel.module';

@NgModule({
  declarations: [
    IndexHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
