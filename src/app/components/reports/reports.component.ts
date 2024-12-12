import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatTooltipModule,
    NgbRatingModule,
    CommonModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  providers: [NgbRatingConfig],
})
export class ReportsComponent implements OnInit{
  constructor(config: NgbRatingConfig) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}

  ngOnInit(): void {}

  downloadReport() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Download Complete",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
