import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { NgModule } from '@angular/core';
import { FilterPipe } from './shared/filter-pipe'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadcsvComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
