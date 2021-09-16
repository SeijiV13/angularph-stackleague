import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarItemsComponent } from './seminar-items.component';

describe('SeminarItemsComponent', () => {
  let component: SeminarItemsComponent;
  let fixture: ComponentFixture<SeminarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
