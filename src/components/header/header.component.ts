import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = false;
  toggle = false;
  isMobile = false;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfWindowIsMobile(window.innerWidth);
  }

  private checkIfWindowIsMobile(width: number) {
    this.isMobile = width <= 768;
  }

  ngOnInit() {
    this.checkIfWindowIsMobile(window.innerWidth);
  }

}
