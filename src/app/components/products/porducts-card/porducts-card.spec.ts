import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorductsCard } from './porducts-card';

describe('PorductsCard', () => {
  let component: PorductsCard;
  let fixture: ComponentFixture<PorductsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorductsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PorductsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
