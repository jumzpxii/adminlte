import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthComponent } from './macth.component';

describe('MacthComponent', () => {
  let component: MacthComponent;
  let fixture: ComponentFixture<MacthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
