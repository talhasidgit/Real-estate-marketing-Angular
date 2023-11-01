import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  slides = [
    { img: "assets/img/partners/partner1.jpg" },
    { img: "assets/img/partners/partner2.jpg" },
    { img: "assets/img/partners/partner3.jpg" },
    { img: "assets/img/partners/partner4.jpg" },
    { img: "assets/img/partners/partner5.jpg" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, autoplay: true, dots: false, swipeToSlide: true };

  addSlide() {
    // this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
