import { Component, OnInit } from '@angular/core';
import { Contactperson } from '../../Contactperson';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cperson: Contactperson[] = [];

  constructor() { }

  ngOnInit() {
  }

}
