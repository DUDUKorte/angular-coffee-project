import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  count = 0;
  isVisible = false;
  isRed = true;

  addCount(): void {
    this.count += this.count < 10 ? 1: 0;
    this.isVisible = !this.isVisible;
  }

  resetCount(): void {
    this.count = 0;
    this.isRed = !this.isRed;
  }

}
