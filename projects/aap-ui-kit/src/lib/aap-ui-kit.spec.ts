import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AapUiKit } from './aap-ui-kit';

describe('AapUiKit', () => {
  let component: AapUiKit;
  let fixture: ComponentFixture<AapUiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AapUiKit],
    }).compileComponents();

    fixture = TestBed.createComponent(AapUiKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
