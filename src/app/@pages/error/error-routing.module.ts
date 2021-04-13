import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Err404Component } from './err404/err404.component';

const routes: Routes = [
  { path: '404', component: Err404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
