import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizz } from './quizz';

describe('Quizz', () => {
  let component: Quizz;
  let fixture: ComponentFixture<Quizz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quizz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quizz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
