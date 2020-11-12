import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyerDetailComponent } from './plyer-detail.component';

describe('PlyerDetailComponent', () => {
  let component: PlyerDetailComponent;
  let fixture: ComponentFixture<PlyerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlyerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
