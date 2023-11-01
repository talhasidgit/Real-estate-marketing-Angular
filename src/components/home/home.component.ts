import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1,2,3,4,5].map((n) => `assets/img/B ${n}.jpg`);
}
