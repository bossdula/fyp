import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
// import { User } from '../../interfaces/auth';
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
  loginData: any;

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


  loginUser() {
    // Get values from the form
    const { regNo, password } = this.loginForm.value;
  
    // Check if form is valid
    if (this.loginForm.invalid) {
      // this.toastS.showError("Please fill in all fields!");
      return;
    }
  
    const loginData = { regNo, password };
  
    // Call authService to submit login data
    this.authService.submitLogin(loginData).subscribe(
      response => {
        if (response.status === 200) {
          // If login is successful, save to sessionStorage or redirect
          // sessionStorage.setItem('regNo', regNo);
  
          // Navigate to the home page
          this.router.navigateByUrl('/home');
  
          // Show success toast
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
  
          Toast.fire({
            icon: 'success',
            title: 'Login successful!'
          });
  
        } else {
          // Show error toast if credentials are invalid
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
  
          Toast.fire({
            icon: 'error',
            title: 'Invalid credentials'
          });
        }
      },
      error => {
        console.error('Login error:', error);
        // this.toastS.showError('An error occurred. Please try again later.');
      }
    );
  }
}








