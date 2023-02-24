import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdravTab2Component } from './zdrav.tab2.component';

describe('ZdravTab2Component', () => {
  let component: ZdravTab2Component;
  let fixture: ComponentFixture<ZdravTab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdravTab2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdravTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
