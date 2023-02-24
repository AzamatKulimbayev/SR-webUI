import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdravTab0Component } from './zdrav.tab0.component';

describe('ZdravTab0Component', () => {
  let component: ZdravTab0Component;
  let fixture: ComponentFixture<ZdravTab0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdravTab0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdravTab0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
