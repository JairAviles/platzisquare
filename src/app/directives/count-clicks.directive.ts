import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: 'li[appCountClicks]'
})

export class CountCicksDirective {
    clickN = 0;
    @HostBinding('style.opacity') opacity = .1;
    @HostListener('click', ['$event.target']) onClick(btn) {
        console.log('a', btn, 'Clicks number:', this.clickN++);
        this.opacity += .1;
    }
}
