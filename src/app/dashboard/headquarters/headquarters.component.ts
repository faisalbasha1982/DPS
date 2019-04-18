import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.css']
})
export class HeadquartersComponent implements OnInit {

  inputs: string[];
  topics: string[] = ["hello", "hi","how"];
  land: string[] = ["belgie", "frenchie", "germanie"];


  constructor() {
    
  }

  ngOnInit() {
  }

  addCustomer(){    
    //var cust = new Customer();
    //this.CustomerServices.addCustomer(cust);
  }

}
