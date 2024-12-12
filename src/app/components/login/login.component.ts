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
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    CommonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatIcon,
    MatToolbarModule,
    MatMenuModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, ToastService]
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    if (this.authService.ifLoggedIn()) {
      this.router.navigate(['/home']);
    }
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

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => { 
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Login successfully!"
          });

        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Invalid credentials"
          });
        }
      },
      error => console.log(error)
    )
  
  }


}
