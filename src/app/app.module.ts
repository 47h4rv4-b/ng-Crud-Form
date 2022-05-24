import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddComponent } from './add/add.component' /**for ngModel */
@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /**for ngModel */,
    ReactiveFormsModule/**for form Validation */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
