import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-err404',
  templateUrl: './err404.component.html',
  styleUrls: ['./err404.component.scss']
})
export class Err404Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      window.scrollTo(0, 0); //envia arriba al dirigirse a esta ruta
    }, 200);
  }

}
