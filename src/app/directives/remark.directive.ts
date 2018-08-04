import { Directive, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appRemark]'
})

export class RemarkDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @Input('appRemark') plan: String = '';
    ngOnInit() {
        if (this.plan === 'premium') {
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}
