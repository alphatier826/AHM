import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  getArray(count: number) {
    return new Array(count)
  }

  arrayLength = 10;

  config: Slick.Config = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000 ,
      prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" style="color: red; "aria-hidden="true"></i></div>'
    }

}
