import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNotificationDialogComponent } from './basic-notification-dialog.component';

describe('BasicNotificationDialogComponent', () => {
  let component: BasicNotificationDialogComponent;
  let fixture: ComponentFixture<BasicNotificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicNotificationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicNotificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
