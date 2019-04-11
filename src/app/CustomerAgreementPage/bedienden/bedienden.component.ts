import { Component, OnInit,Input } from '@angular/core';
import { InputboxComponent } from '../../inputbox/inputbox.component';

@Component({
  selector: 'app-bedienden',
  templateUrl: './bedienden.component.html',
  styleUrls: ['./bedienden.component.css']
})
export class BediendenComponent implements OnInit {

  @Input() coefficient:string;

  constructor() { 
    console.log("parent ="+this.coefficient);

  }

  ngOnInit() {
    console.log("parent ="+this.coefficient);

  }

  displayCoeff(message) {
    console.log("parent ="+message);
    this.coefficient = message;
  }

}
