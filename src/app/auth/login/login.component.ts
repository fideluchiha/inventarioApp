import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=  new FormGroup({

    username: new FormControl(''),
    clave: new FormControl(''),
   
  });

  constructor() { }

  ngOnInit(): void {
  }

  onlogin(){

    console.log('Form ->',this.loginForm.value)
}
}
