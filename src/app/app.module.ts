import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
