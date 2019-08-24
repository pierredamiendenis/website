import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  a = [1,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,5]

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
