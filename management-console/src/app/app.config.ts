import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleEventComponent } from './console/console.component';
import { API_URL } from './api-url.token';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withFetch()),
    provideRouter([{ path: '', component: ConsoleEventComponent }]),
    { provide: API_URL, useValue: 'http://localhost:8000/api/eventdata/' },
  ],
};
