import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Customer';
import { Contactperson } from '../../Contactperson';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  headquarters: Customer[] = [];
  cperson: Contactperson[] = [];

  constructor() { }

  ngOnInit() {
  }

}
