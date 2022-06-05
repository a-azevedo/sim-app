import { TestBed } from '@angular/core/testing';

import { GAcademicoService } from './g-academico.service';

describe('GAcademicoService', () => {
  let service: GAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
