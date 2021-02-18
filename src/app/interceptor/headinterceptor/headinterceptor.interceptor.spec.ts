import { TestBed } from '@angular/core/testing';

import { HeadinterceptorInterceptor } from './headinterceptor.interceptor';

describe('HeadinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadinterceptorInterceptor = TestBed.inject(HeadinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
