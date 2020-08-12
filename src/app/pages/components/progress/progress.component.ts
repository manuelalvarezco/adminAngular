import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressOne = 25;
  progressTwo = 40;


  constructor() { }

  ngOnInit(): void {
  }

  get getProgressOne(){
    return `${this.progressOne}%`;
  }

  get getProgressTwo(){
    return `${this.progressTwo}%`;

  }


}
