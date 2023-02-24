import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgroComponent } from './agro.component';

const routes: Routes = [
  { path: '', component: AgroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgroRoutingModule { }
