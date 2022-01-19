import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFilterFormComponent } from './joke-filter-form.component';

describe('JokeFilterFormComponent', () => {
  let component: JokeFilterFormComponent;
  let fixture: ComponentFixture<JokeFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeFilterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
