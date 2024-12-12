import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { DialogRef } from '@angular/cdk/dialog';
import { HttpClientModule } from '@angular/common/http';
import { EvaluationService } from '../../services/evaluation.service';
import { ToastService } from '../../shared/services/notify/toast.service';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
  providers: [
    EvaluationService,
    ToastService
  ]
})
export class AddCourseComponent {

  ngOnInit(): void {
  }

  college: string[] = [
    'COET',
    'CONAS',
    'COICT',
    'COHU',
    'COAF',
    'COSS',
    'SOAF',
    'UDBS'
  ];

  semester: string[] = ['1', '2'];

  year: string[] = ['1','2','3','4','5'];

  constructor(
    private _fb: FormBuilder,
    private particularService: EvaluationService,
    private toastS: ToastService
  ) {}

    courseAddForm = this._fb.group({
      college: '',
      department: '',
      code: '',
      title: '',
      venue: '',
      size: '',
      semester: '',
      year: '',
      programmes: '',
      instructor: ''
    });


    onFormSubmit() {
      const { college, department, code, title, venue, size, semester, year, programmes, instructor } = this.courseAddForm.value;

        this.particularService.registerCourse({
          courseCollege: college,
          department: department,
          courseCode: code,
          courseTitle: title,
          lectureVenue: venue,
          classSize: size,
          courseSemester: semester,
          studyYear: year,
          studentProgramme: programmes,
          instructorName: instructor,
        }).subscribe({
          next: (resp) => {
            if(resp) {
              this.toastS.ev('success', 'New Course Added Successfully!');
            } else {
              this.toastS.ev('error', 'Something Went Wrong');
            }
          }, 
          error: (err) => {
            this.toastS.ev('error', 'Something Went Wrong');
          }
        })
      
      }
      // console.log(this.courseAddForm.value);
    }

