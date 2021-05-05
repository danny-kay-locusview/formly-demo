import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearInputComponent } from './clear-input.component';

describe('ClearInputComponent', () => {
  let component: ClearInputComponent;
  let fixture: ComponentFixture<ClearInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
