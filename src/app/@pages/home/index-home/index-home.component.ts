import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CarouselImages } from '@app/components/carousel/interfaces/carousel-images';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImagesService } from '../services/carousel-images.service';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.scss'],
})
export class IndexHomeComponent implements OnInit {
  carouselImages: CarouselImages[];

  constructor(private readonly carouselImagesService: CarouselImagesService) { }

  ngOnInit(): void {
    this.carouselImages = this.getImagesCarousel();
  }

  getImagesCarousel(): CarouselImages[] {
    return this.carouselImagesService.getImagesCarousel();
  }

}
