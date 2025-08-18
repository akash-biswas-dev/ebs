import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      (click)="onClickHandler()"
      [class]="{
        btn__primary: variant() === 'primary',
        btn__secondary: variant() === 'secondary',
        btn__gradient: variant() === 'gradient'
      }"
      class="btn"
    >
      {{ label() }}
    </button>
  `,
})
export class Button {
  click = output<void>();

  label = input.required();
  variant = input<'primary' | 'secondary' | 'gradient'>('primary');

  onClickHandler() {
    this.click.emit();
  }
}
