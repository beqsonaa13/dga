import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbMovieComponent } from './imdb-movie.component';

describe('ImdbMovieComponent', () => {
  let component: ImdbMovieComponent;
  let fixture: ComponentFixture<ImdbMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImdbMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImdbMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
