import { TestBed, inject } from '@angular/core/testing';

import { RequesthttpService } from './requesthttp.service';

describe('RequesthttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesthttpService]
    });
  });

  it('should be created', inject([RequesthttpService], (service: RequesthttpService) => {
    expect(service).toBeTruthy();
  }));
});
