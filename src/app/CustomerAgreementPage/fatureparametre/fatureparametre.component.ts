import { Component, OnInit,Input } from '@angular/core';
import { InputboxComponent } from 'src/app/inputbox/inputbox.component';
import { FormArray, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-fatureparametre',
  templateUrl: './fatureparametre.component.html',
  styleUrls: ['./fatureparametre.component.css']
})
export class FatureparametreComponent implements OnInit {

  @Input() addRow: string;
  public disabled="false";
  public addNewRow:boolean;
  public removeLastRemove:boolean;

  public form: FormGroup;
  public Ploegpremiere: FormArray;  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      PloegprimeBox1: [''],
      PloegprimeBox2: [''],
      PloegprimeBox3: [''],
      arrayBox: this.fb.array([
        this.createFirstServant()
      ])
    });
  
  // set Ploegpremiere to the form control containing contacts
    this.Ploegpremiere = this.form.get('arrayBox') as FormArray;

  }

  createFirstServant(): FormGroup {
    this.addNewRow = false;
    this.removeLastRemove = true;

    return this.fb.group({
      PloegprimeBox1: [''],
      PloegprimeBox2: [''],
      PloegprimeBox3: [''],      
    });
  }

  createServants(): FormGroup {
    this.addNewRow = false;
    this.removeLastRemove = false;

    return this.fb.group({
      PloegprimeBox1: [''],
      PloegprimeBox2: [''],
      PloegprimeBox3: [''],      
    });

  }

  get arrayBox() {
    return this.Ploegpremiere.get('arrayBox') as FormArray;
  }

  addRows() {
    this.Ploegpremiere.push(this.createServants());
  }

  removeRows(index) {
    if(index >0 )
      this.Ploegpremiere.removeAt(index);      
  }

  replaceRows(index){
  
  }
}
