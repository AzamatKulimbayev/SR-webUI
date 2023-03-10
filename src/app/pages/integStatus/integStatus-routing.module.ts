import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegStatusComponent } from './integStatus.component';

const routes: Routes = [
  { path: '', component: IntegStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegStatusRoutingModule { }
