import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFilterComponent } from './joke-filter.component';

describe('JokeFilterComponent', () => {
  let component: JokeFilterComponent;
  let fixture: ComponentFixture<JokeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
