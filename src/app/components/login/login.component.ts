import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { ToastService } from '../../shared/services/notify/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, ToastService]
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    
  }

  loginForm = this.fb.group({
    regNo: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastS: ToastService
  ) {}

  loginUser(){
    const {regNo, password} = this.loginForm.value;
    this.authService.getUserByRegNo(regNo as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('regNo', regNo as string);
          this.router.navigateByUrl('home');
        } else {
          this.toastS.ev('error', 'Invalid Credentials');
        }
      },
      error => {
        this.toastS.ev('error', 'Something went wrong');
      }
    )
  }

  // submitDetails() {
  //   console.log(this.loginForm.value);
  //   const postData = {...this.loginForm.value};
    
  //   this.authS.registerUser(postData as User).subscribe({
  //     next: (resp) => {
  //       console.log(resp)
  //       this.toastS.ev('success', 'Logged In successfull');
  //     },
  //     error: (err) => {
  //       console.log(err)
  //       this.toastS.ev('error', 'Something went wrong');
  //     }
  //   })
  // }

  // get email() {
  //   return this.loginForm.controls('email');
  // }

}
