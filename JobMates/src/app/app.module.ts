import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ChangePwdComponent } from './shared/components/change-pwd/change-pwd.component';
import { MessageComponent } from './shared/components/message/message.component';
import { MaterialModule } from './shared/material Module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { HomeComponent } from './job-seekers/home/home.component';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component' ;
import { PostjobService } from './postjob.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ChangePwdComponent,
    MessageComponent,
    ImageSliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [PostjobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
