import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.html',
  styleUrls: ['./simple-component.scss']
})
export class SimpleComponent implements OnInit {
  @Input() title: string = 'Contador Angular';
  @Input() initialCount: number = 0;
  @Input() color: string = '#ff6b35';

  count: number = 0;
  totalClicks: number = 0;
  angularVersion: string = '18+';

  ngOnInit(): void {
    this.count = this.initialCount;
    this.updateCssVariable();
  }

  increment(): void {
    this.count++;
    this.totalClicks++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
      this.totalClicks++;
    }
  }

  reset(): void {
    this.count = 0;
    this.totalClicks++;
  }

  private updateCssVariable(): void {
    // Atualiza a variável CSS customizada
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--primary-color', this.color);
    }
  }
}
