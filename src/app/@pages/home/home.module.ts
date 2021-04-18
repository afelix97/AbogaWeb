import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CarouselModule } from '@app/components/carousel/carousel.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    IndexHomeComponent,
    QuienesSomosComponent,
    MisionVisionComponent,
    ServiciosComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class HomeModule { }
