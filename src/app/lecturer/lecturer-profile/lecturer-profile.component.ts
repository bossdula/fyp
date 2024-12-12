import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lecturer-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './lecturer-profile.component.html',
  styleUrl: './lecturer-profile.component.css'
})
export class LecturerProfileComponent {

}
