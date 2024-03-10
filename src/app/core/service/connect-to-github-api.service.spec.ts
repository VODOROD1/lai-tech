import { TestBed } from '@angular/core/testing';

import { ConnectToGithubApiService } from './connect-to-github-api.service';

describe('ConnectToGithubApiService', () => {
  let service: ConnectToGithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToGithubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
