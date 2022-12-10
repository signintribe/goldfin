import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoComponent } from './vo.component';

describe('VoComponent', () => {
  let component: VoComponent;
  let fixture: ComponentFixture<VoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
