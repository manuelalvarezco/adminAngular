import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  labels1 = ['Pan', 'Soda', 'Tacos'];
  // Doughnut
  public data1 = [
    [200, 190, 23]
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
