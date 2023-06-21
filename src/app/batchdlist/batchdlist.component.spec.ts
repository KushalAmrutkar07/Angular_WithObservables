import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdlistComponent } from './batchdlist.component';

describe('BatchdlistComponent', () => {
  let component: BatchdlistComponent;
  let fixture: ComponentFixture<BatchdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchdlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
