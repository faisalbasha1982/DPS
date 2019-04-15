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

  public formNew: FormGroup;
  public Andre:FormArray;

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

    this.formNew = this.fb.group({
      AndreBox1: [''],
      AndreBox2: [''],
      AndreBox3: [''],
      arrayAndreBox: this.fb.array([
        this.createAndre()
      ])
    });
  
  // set Ploegpremiere to the form control containing contacts
    this.Ploegpremiere = this.form.get('arrayBox') as FormArray;
    this.Andre = this.formNew.get('arrayAndreBox') as FormArray;
  }

  createAndre(): FormGroup {
    this.addNewRow = false;
    this.removeLastRemove = true;

    return this.fb.group({
      AndreBox1: [''],
      AndreBox2: [''],
      AndreBox3: [''],   
    });

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

  get arrayAndreBox() {
    return this.Andre.get('arrayAndreBox') as FormArray;
  }

  addAndreRows() {
    this.Andre.push(this.createAndre());
  }

  removeAndreRows(index) {
    if(this.Andre.length != 1)
      this.Andre.removeAt(index);
  }


  get arrayBox() {
    return this.Ploegpremiere.get('arrayBox') as FormArray;
  }

  addRows() {
    this.Ploegpremiere.push(this.createServants());
  }

  removeRows(index) {
    if(this.Ploegpremiere.length != 1)
      this.Ploegpremiere.removeAt(index);
  }

  replaceRows(index){
  
  }
}
