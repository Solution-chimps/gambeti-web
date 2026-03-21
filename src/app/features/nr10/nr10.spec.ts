import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nr10Component } from './nr10';

describe('Nr10Component', () => {
  let component: Nr10Component;
  let fixture: ComponentFixture<Nr10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Nr10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.activeTab).toBe('laudo5410');
    expect(component.activeFaq).toBeNull();
    expect(component.isMobileMenuOpen).toBeFalse();
    expect(component.showBackToTop).toBeFalse();
  });

  it('should toggle active tab', () => {
    component.setActiveTab('spda');
    expect(component.activeTab).toBe('spda');
  });

  it('should toggle FAQ item', () => {
    component.toggleFaq(0);
    expect(component.activeFaq).toBe(0);
    component.toggleFaq(0);
    expect(component.activeFaq).toBeNull();
  });

  it('should toggle mobile menu', () => {
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeTrue();
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalse();
  });
});
