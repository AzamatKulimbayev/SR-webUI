import { NgModule } from '@angular/core';

import { ZdravRoutingModule } from './zdrav-routing.module';

import { ZdravComponent } from './zdrav.component';
import { ZdravTab0Component } from './zdrav.components/zdrav.tab0/zdrav.tab0.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import { NzTableModule } from 'ng-zorro-antd/table';
import { ZdravTab2Component } from './zdrav.components/zdrav.tab2/zdrav.tab2.component';
import { ZdravTab1Component } from './zdrav.components/zdrav.tab1/zdrav.tab1.component';
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  imports: [ZdravRoutingModule, NzTabsModule, NzTableModule, NzDividerModule],
  declarations: [ZdravComponent, ZdravTab0Component,  ZdravTab2Component, ZdravTab1Component],
  exports: [ZdravComponent]
})
export class ZdravModule { }
