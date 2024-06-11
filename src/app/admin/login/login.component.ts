import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userData = { 
    tenDN:'', 
    matKhau:'' 
  } 
  constructor() { } 
  ngOnInit(): void { 
  } 
  onSubmit(loginForm: NgForm) { 
    console.log(this.userData);
    console.log(loginForm.value);
  }
  suggest(){ 
    this.userData.tenDN='Datnt@fpt.edu.vn' 
  } 
}
