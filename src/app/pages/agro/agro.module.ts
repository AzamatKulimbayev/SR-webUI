import { NgModule } from '@angular/core';

import { AgroRoutingModule } from './agro-routing.module';

import { AgroComponent } from './agro.component';


@NgModule({
  imports: [AgroRoutingModule],
  declarations: [AgroComponent],
  exports: [AgroComponent]
})
export class AgroModule { }
