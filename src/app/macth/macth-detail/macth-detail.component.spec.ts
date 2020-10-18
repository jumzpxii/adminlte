import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthDetailComponent } from './macth-detail.component';

describe('MacthDetailComponent', () => {
  let component: MacthDetailComponent;
  let fixture: ComponentFixture<MacthDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacthDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
