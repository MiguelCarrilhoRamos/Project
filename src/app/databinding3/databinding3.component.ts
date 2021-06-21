import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding3',
  templateUrl: './databinding3.component.html',
  styleUrls: ['./databinding3.component.css']
})
export class Databinding3Component implements OnInit {

  public numb: number;

  constructor() {
    this.numb=0;
  }

  ngOnInit(): void {
  }
  incrementarNumb(){
    this.numb +=1;
  }
}
