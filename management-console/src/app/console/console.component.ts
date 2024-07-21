import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api-url.token';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-console-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
})
export class ConsoleEventComponent implements OnInit {
  events_data: any[] = [];

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {

      this.events_data = data;
    });
  }

  createEvent() {
    const newEvent = {
      event: 'Event',
    };
    this.http.post(this.apiUrl, newEvent).subscribe(() => {
      this.loadEvents();
    });
    console.log(this.events_data);
  }

  deleteEvent(id: number) {
    this.http.delete(`${this.apiUrl}${id}`).subscribe(() => {
      this.loadEvents();
    });
  }
}
