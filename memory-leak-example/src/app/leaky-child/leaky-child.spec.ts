import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakyChild } from './leaky-child';

describe('LeakyChild', () => {
  let component: LeakyChild;
  let fixture: ComponentFixture<LeakyChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeakyChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeakyChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
