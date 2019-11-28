import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange.component';


const routes: Routes = [
  { path: '', component: ExchangeComponent }
];

@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExchangeModule { }
