import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealOnScroll } from './reveal-on-scroll';

describe('RevealOnScroll', () => {
  let component: RevealOnScroll;
  let fixture: ComponentFixture<RevealOnScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealOnScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(RevealOnScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
