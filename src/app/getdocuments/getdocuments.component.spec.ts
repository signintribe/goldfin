import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdocumentsComponent } from './getdocuments.component';

describe('GetdocumentsComponent', () => {
  let component: GetdocumentsComponent;
  let fixture: ComponentFixture<GetdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
