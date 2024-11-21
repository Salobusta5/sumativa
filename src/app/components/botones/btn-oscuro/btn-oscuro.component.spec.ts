import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOscuroComponent } from './btn-oscuro.component';

describe('BtnOscuroComponent', () => {
  let component: BtnOscuroComponent;
  let fixture: ComponentFixture<BtnOscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnOscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
