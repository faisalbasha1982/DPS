import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albeiders',
  templateUrl: './albeiders.component.html',
  styleUrls: ['./albeiders.component.css']
})
export class AlbeidersComponent implements OnInit {
  english: string[];
  dutch: string[];

  constructor() { 
    this.english = [];
    this.dutch = [];
  }

  ngOnInit() {

  }

}
