import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EvaluationComponent } from '../evaluation/evaluation.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    ButtonModule,
    MatExpansionModule,
    MatAccordion,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [provideNativeDateAdapter()]
})
export class FormComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private router :Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(EvaluationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
