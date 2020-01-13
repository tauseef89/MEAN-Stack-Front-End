import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListingComponent } from './all-listing.component';

describe('AllListingComponent', () => {
  let component: AllListingComponent;
  let fixture: ComponentFixture<AllListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
