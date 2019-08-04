import { TestBed } from '@angular/core/testing';

import { CommonuiService } from './commonui.service';

describe('CommonuiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonuiService = TestBed.get(CommonuiService);
    expect(service).toBeTruthy();
  });
});
