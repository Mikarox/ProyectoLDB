import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    if (localStorage.getItem('sesion')) {
      location.replace('/HappyDeal');
    } else {
      console.log('no hay sesion activa');
    }

  }

  ngOnInit(): void {
  }

}
