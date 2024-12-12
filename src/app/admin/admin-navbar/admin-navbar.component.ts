import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit{

  ngOnInit(): void {

  }

  constructor () {
    
  }

}
