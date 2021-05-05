import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputWrapperComponent } from './custom-input-wrapper.component';

describe('CustomInputWrapperComponent', () => {
  let component: CustomInputWrapperComponent;
  let fixture: ComponentFixture<CustomInputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
