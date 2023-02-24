import { NgModule } from '@angular/core';

import { IntegStatusRoutingModule } from './integStatus-routing.module';

import { IntegStatusComponent } from './integStatus.component';


@NgModule({
  imports: [IntegStatusRoutingModule],
  declarations: [IntegStatusComponent],
  exports: [IntegStatusComponent]
})
export class IntegStatusModule { }
