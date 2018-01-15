import { TestBed, inject } from '@angular/core/testing';

import { BrandingserviceService } from './brandingservice.service';

describe('BrandingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandingserviceService]
    });
  });

  it('should be created', inject([BrandingserviceService], (service: BrandingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
