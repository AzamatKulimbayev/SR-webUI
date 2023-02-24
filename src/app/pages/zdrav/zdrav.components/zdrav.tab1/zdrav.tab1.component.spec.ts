import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdravTab1Component } from './zdrav.tab1.component';

describe('ZdravTab1Component', () => {
  let component: ZdravTab1Component;
  let fixture: ComponentFixture<ZdravTab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdravTab1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdravTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
