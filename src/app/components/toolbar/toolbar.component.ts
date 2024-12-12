import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(private router: Router){

  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
}
