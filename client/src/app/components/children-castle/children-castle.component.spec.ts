import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCastleComponent } from './children-castle.component';

describe('ChildrenCastleComponent', () => {
  let component: ChildrenCastleComponent;
  let fixture: ComponentFixture<ChildrenCastleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenCastleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenCastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
