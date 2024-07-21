import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsoleEventComponent } from './console.component';
import { API_URL } from '../api-url.token';

describe('ConsoleEventComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ConsoleEventComponent, // Import the standalone component directly
      ],
      providers: [
        { provide: API_URL, useValue: 'http://localhost:8000/api/eventdata/' },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsoleEventComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should load events on init', () => {
    const fixture = TestBed.createComponent(ConsoleEventComponent);
    const component = fixture.componentInstance;
    const loadEventsSpy = spyOn(component, 'loadEvents').and.callThrough();
    component.ngOnInit();
    expect(loadEventsSpy).toHaveBeenCalled();
  });
});
