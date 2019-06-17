import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  imports: [
  
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule

],
  exports: [
   
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule

  ],
  
})
export class MaterialModule { }
