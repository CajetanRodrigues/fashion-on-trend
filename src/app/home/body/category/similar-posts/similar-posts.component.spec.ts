import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPostsComponent } from './similar-posts.component';

describe('SimilarPostsComponent', () => {
  let component: SimilarPostsComponent;
  let fixture: ComponentFixture<SimilarPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
