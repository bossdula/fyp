import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatChipsModule,
    MatSelectModule
    
  ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css',
  
})
export class EvaluationComponent implements OnInit{
 
  isEditable = false;

  ngOnInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
    question4: ['', Validators.required],
    question5: ['', Validators.required],
    question6: ['', Validators.required],
    question7: ['', Validators.required],
    question8: ['', Validators.required],
    question9: ['', Validators.required],
    question10  : ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    question11: ['', Validators.required],
    question12: ['', Validators.required],
    question13: ['', Validators.required],
    question14: ['', Validators.required],
    question15: ['', Validators.required],
    question16: ['', Validators.required],
    question17: ['', Validators.required],
    question18: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 900px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  rating: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];

  submitForm1() {
    console.log(this.firstFormGroup.value);
  }

  submitForm2() {
    console.log(this.secondFormGroup.value);
  }

}
