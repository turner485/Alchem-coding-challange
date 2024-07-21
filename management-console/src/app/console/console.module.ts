import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleEventComponent } from './console.component';

@NgModule({
  declarations: [ConsoleEventComponent],
  imports: [CommonModule],
  exports: [ConsoleEventComponent], // Export if needed by other modules
})
export class ConsoleModule {}
