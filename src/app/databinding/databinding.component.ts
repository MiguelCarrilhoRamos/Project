import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  public numero: number;

  @Input()
  numero2!: number;
  @Input()
  newstartingPoint!: number;

  @Output() starting: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.numero = 0;
  }

  ngOnInit(): void {}
  numeroIncrement() {
    console.log(this.newstartingPoint);
    if (this.newstartingPoint) {
      this.numero = this.newstartingPoint + this.numero2;
      this.starting.emit(this.numero);
      return;
    }
    this.numero = this.numero + this.numero2;
    this.starting.emit(this.numero);
  }
}
