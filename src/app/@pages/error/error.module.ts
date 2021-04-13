import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ErrorRoutingModule } from './error-routing.module';
import { Err404Component } from './err404/err404.component';

@NgModule({
  declarations: [Err404Component],
  exports:[],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ErrorModule { }
