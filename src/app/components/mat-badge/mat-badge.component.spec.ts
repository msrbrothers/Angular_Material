import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgeComponent } from './mat-badge.component';

describe('MatBadgeComponent', () => {
  let component: MatBadgeComponent;
  let fixture: ComponentFixture<MatBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
