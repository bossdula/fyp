import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

// import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from '../add-course/add-course.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    // DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbHighlight,
    NgbPaginationModule,
    MatDialogModule,
    MatChipsModule

    // NgbdSortableHeader,

  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
  providers: [ DecimalPipe],
})
export class CourseListComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor (private router :Router, private dialog: MatDialog) {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCourseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  deleteCourse() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Course has been deleted.",
          icon: "success"
        });
      }
    });
    
  }




}





	// total$: Observable<number>;

	// @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

	// constructor(public service: CountryService) {
	// 	this.countries$ = service.countries$;
	// 	this.total$ = service.total$;
	// }

// 	onSort({ column, direction }: SortEvent) {
// 		// resetting other headers
// 		this.headers.forEach((header) => {
// 			if (header.sortable !== column) {
// 				header.direction = '';
// 			}
// 		});

// 		this.service.sortColumn = column;
// 		this.service.sortDirection = direction;
// 	}
// }
