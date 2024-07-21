import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Management Console';
}
