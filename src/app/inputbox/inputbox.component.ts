import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  @Input() title: string;
  @Input() coefficient :number;
  @Output() public  childEvent = new EventEmitter();

  public form: FormGroup;
  public Ploegpremiere: FormArray;  

  constructor() {
        console.log(this.coefficient);
   }

  ngOnInit() {
    console.log(this.coefficient);

    this.form = new FormGroup({
      'coefficent': new FormControl('', [Validators.required]),
    });  
  }

  get coefficent() { 
    return this.form.get('coefficent'); 
  }

  displayCoeff(){
    console.log(this.coefficient);
    this.childEvent.emit(""+this.coefficient);
  }

}

