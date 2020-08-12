import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styleUrls: ['./increments.component.css']
})
export class IncrementsComponent implements OnInit {

  @Input() progress = 50;
  @Input() btnClass = 'btn-primary';


  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  valueChange(value:number){
    if (this.progress >= 0 && value >=0){
      this.outputValue.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0){
      this.outputValue.emit(0);
      return this.progress = 0;
    }


    this.progress += value;
    this.outputValue.emit(this.progress);
  }

  onChange(value: number){
    if( value >= 100){
      this.progress = 100
    }else if( value <= 0){
      this.progress = 0;
    }else{
      this.progress = value
    }

  }

}
