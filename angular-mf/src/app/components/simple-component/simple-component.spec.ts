import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleComponent } from './simple-component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    component.ngOnInit();
    expect(component.count).toBe(0);
    expect(component.totalClicks).toBe(0);
    expect(component.title).toBe('Contador Angular');
  });

  it('should initialize with custom initial count', () => {
    component.initialCount = 5;
    component.ngOnInit();
    expect(component.count).toBe(5);
  });

  it('should increment count and total clicks', () => {
    component.increment();
    expect(component.count).toBe(1);
    expect(component.totalClicks).toBe(1);
  });

  it('should decrement count when count > 0', () => {
    component.count = 5;
    component.decrement();
    expect(component.count).toBe(4);
    expect(component.totalClicks).toBe(1);
  });

  it('should not decrement count when count is 0', () => {
    component.count = 0;
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should reset count to 0', () => {
    component.count = 10;
    component.reset();
    expect(component.count).toBe(0);
    expect(component.totalClicks).toBe(1);
  });

  it('should update CSS variable on init', () => {
    const spy = spyOn(document.documentElement.style, 'setProperty');
    component.color = '#ff0000';
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('--primary-color', '#ff0000');
  });
});
