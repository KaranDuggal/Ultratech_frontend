import { TestBed } from '@angular/core/testing';

import { HeadInterceptor } from './head.interceptor';

describe('HeadInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadInterceptor = TestBed.inject(HeadInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
