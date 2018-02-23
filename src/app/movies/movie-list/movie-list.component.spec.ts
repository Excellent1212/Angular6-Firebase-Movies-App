import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieListComponent } from './movie-list.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TmdbService } from '../../shared/tmdb/tmdb.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        LazyLoadImageModule,
        HttpClientTestingModule
      ],
      declarations: [ MovieListComponent ],
      providers: [
        TmdbService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
