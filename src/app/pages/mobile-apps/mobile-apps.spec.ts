import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileApps } from './mobile-apps';

describe('MobileApps', () => {
  let component: MobileApps;
  let fixture: ComponentFixture<MobileApps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileApps],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileApps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
