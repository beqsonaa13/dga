import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgaInputComponent } from './dga-input.component';

describe('DgaInputComponent', () => {
  let component: DgaInputComponent;
  let fixture: ComponentFixture<DgaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DgaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DgaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
