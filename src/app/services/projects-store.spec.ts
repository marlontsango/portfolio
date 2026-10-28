import { TestBed } from '@angular/core/testing';
import { ProjectsStore } from './projects-store';

describe('ProjectsStore', () => {
  let service: ProjectsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
