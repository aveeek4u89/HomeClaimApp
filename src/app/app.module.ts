import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatButtonModule,BrowserAnimationsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule
    ,FormsModule, ReactiveFormsModule,HttpClientModule,MatToolbarModule,MatSnackBarModule
  ],
  providers: [MatDatepickerModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
