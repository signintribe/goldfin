import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmovComponent } from './cmov.component';

describe('CmovComponent', () => {
  let component: CmovComponent;
  let fixture: ComponentFixture<CmovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
