import { Component } from '@angular/core';
import { Pagination } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2.6,
    speed: 600,
    pagination: false,
    // pager: false,
    spaceBetween: 20
  };

  constructor() {}

}
