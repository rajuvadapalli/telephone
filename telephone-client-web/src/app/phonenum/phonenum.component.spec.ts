import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumComponent } from './phonenum.component';

describe('PhonenumComponent', () => {
  let component: PhonenumComponent;
  let fixture: ComponentFixture<PhonenumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonenumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
