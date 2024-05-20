import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
// import { User } from '../../interfaces/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService]
})
export class RegisterComponent implements OnInit{
  [x: string]: any;

  ngOnInit(): void {
    
  }

  registerForm = this.fb.group({
    regNo: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators : passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService  
  ) {

  }

  // constructor(private fb: FormBuilder, private authService: AuthService) {

  // }

  submitDetails() {
    console.log(this.registerForm.value);
    const postData = {...this.registerForm.value};
    delete postData.confirmPassword;

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

    this.authService.registerUser(postData as User).subscribe(
      response => {
        console.log(response); 
      },
      error => console.log(error)
    )
  }
}
