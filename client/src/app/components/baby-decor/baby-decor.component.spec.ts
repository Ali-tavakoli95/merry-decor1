import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyDecorComponent } from './baby-decor.component';

describe('BabyDecorComponent', () => {
  let component: BabyDecorComponent;
  let fixture: ComponentFixture<BabyDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BabyDecorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabyDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
