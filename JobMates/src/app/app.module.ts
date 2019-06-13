import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from  './material.module';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRippleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule, 
  MatSelectModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatCardModule,
  MAT_CHECKBOX_CLICK_ACTION} from '@angular/material';
  //import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
// import { NameEditorComponent } from './name-editor/name-editor.component';     
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
   // NameEditorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
       
     
  ]),
],
  providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check-indeterminate'}
],
  bootstrap: [AppComponent],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCardModule
  ]
})
export class AppModule { }
