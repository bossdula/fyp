
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    AsyncPipe,
    MatDialogModule,
    MatChipsModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  ngOnInit(): void {

  }

  constructor (private router :Router, private dialog: MatDialog) {
    
  }


  deleteUser() {
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
          text: "User has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

}
