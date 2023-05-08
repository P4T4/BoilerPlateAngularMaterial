import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Directive({
  selector: '[appAnimate],[anime]',
})
export class AnimateDirective implements OnChanges, OnDestroy {
  @Input()
  anime!: anime.AnimeParams;
  private animeInstance!: anime.AnimeInstance | null;
  constructor(private elRef: ElementRef) {}

  ngOnDestroy(): void {
    this.dispose();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('anime' in changes) {
      this.dispose();
      this.animeInstance = anime({
        targets: this.elRef.nativeElement,
        ...this.anime,
      });
    }
  }

  private dispose() {
    if (this.animeInstance) {
      anime.remove(this.elRef.nativeElement);
      this.animeInstance = null;
    }
  }
}
