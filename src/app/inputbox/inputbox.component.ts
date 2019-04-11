import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  @Input() title: string;
  @Input() coefficient :number;
  @Output() public  childEvent = new EventEmitter();

  constructor() {
    console.log(this.coefficient);

   }

  ngOnInit() {
    console.log(this.coefficient);
  }

  displayCoeff(){
    console.log(this.coefficient);
    this.childEvent.emit(""+this.coefficient);
  }

}
