import { NgModule } from '@angular/core';

import { ZdravRoutingModule } from './zdrav-routing.module';

import { ZdravComponent } from './zdrav.component';


@NgModule({
  imports: [ZdravRoutingModule],
  declarations: [ZdravComponent],
  exports: [ZdravComponent]
})
export class ZdravModule { }
