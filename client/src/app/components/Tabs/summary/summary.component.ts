import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('sesion')) {
      //ejecuta sacar info del user 
    } else {
      location.replace('');
    }
  }
}
