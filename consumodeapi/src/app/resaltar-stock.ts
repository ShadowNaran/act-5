import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appResaltarStock]',
  host: {
    '(mouseenter)': 'resaltar()',
    '(mouseleave)': 'quitarResaltado()',
  },
})
export class ResaltarStock {
  private elemento = inject(ElementRef<HTMLElement>);

  resaltar(): void { this.elemento.nativeElement.style.backgroundColor = '#fff3cd'; }
  quitarResaltado(): void { this.elemento.nativeElement.style.backgroundColor = ''; }
}
