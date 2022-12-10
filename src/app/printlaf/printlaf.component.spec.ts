import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintlafComponent } from './printlaf.component';

describe('PrintlafComponent', () => {
  let component: PrintlafComponent;
  let fixture: ComponentFixture<PrintlafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintlafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintlafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
