import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css']
})
export class Databinding2Component implements OnInit {
  animais:Array<string>
  condicao:boolean


  constructor() {
    this.animais=["peru","frango","batata","elefante"];
    this.condicao=true;
  }

  ngOnInit(): void {
  }

  restoreAnimais(){
    this.animais=["peru","frango","batata","elefante"];
  }

  popAnimais(){
    if(this.condicao)
      this.animais.pop();
  }

  change(){
      this.condicao =!this.condicao;
    }
}
