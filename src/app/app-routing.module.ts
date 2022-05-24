import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:"app", component:AppComponent},
  {
  path:"add/:id", component:AddComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
