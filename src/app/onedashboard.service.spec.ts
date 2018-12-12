import { TestBed } from '@angular/core/testing';

import { OnedashboardService } from './onedashboard.service';

describe('OnedashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnedashboardService = TestBed.get(OnedashboardService);
    expect(service).toBeTruthy();
  });
});
