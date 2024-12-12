import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastService } from '../../shared/services/notify/toast.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatToolbarModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService, ToastService]
})
export class RegisterComponent implements OnInit{
  [x: string]: any;

  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastS: ToastService
  ) {}

  registerForm = this.fb.group({
    regNo: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  }, {
    validators : passwordMatchValidator
  })


  submitDetails() {
    // console.log(this.registerForm.value);
    const postData = {...this.registerForm.value};
    delete postData.confirmPassword;

    this.authService.submitForm(postData as any).subscribe(
    // this.authService.registerUser(postData as User).subscribe(
      response => {
        console.log(response);
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
          title: "Registered successfully!"
        });
        
        this.router.navigateByUrl('login');
      },
      error => console.log(error)
    )
  }
}





// submitDetails() {
  //   // console.log(this.registerForm.value);
  //   const postData = {...this.registerForm.value};
  //   delete postData.confirmPassword;

  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     }
  //   });
  //   Toast.fire({
  //     icon: "success",
  //     title: "Registered successfully!"
  //   });
    
  //   this.router.navigateByUrl('login');

  //   this.authService.registerUser(postData as User).subscribe(
  //     response => {
  //       console.log(response);
  //     },
  //     error => console.log(error)
  //   )
  // }
