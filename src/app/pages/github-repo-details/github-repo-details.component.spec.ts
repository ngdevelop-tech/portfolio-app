import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoDetailsComponent } from './github-repo-details.component';

describe('GithubRepoDetailsComponent', () => {
  let component: GithubRepoDetailsComponent;
  let fixture: ComponentFixture<GithubRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
