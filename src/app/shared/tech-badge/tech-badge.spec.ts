import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechBadge } from './tech-badge';

describe('TechBadge', () => {
  let component: TechBadge;
  let fixture: ComponentFixture<TechBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(TechBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
