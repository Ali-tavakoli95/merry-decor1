import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Image } from '../../models/image.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './gallery-carousel.component.html',
  styleUrl: './gallery-carousel.component.scss',
  animations: [
    trigger('slide-in', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('middle', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('right', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('left=> middle', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('250ms')
      ]),
      transition('right=> middle', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('250ms')
      ]),
      transition('middle => *', [
        animate('250ms')
      ])
    ])
  ]
})
export class GalleryCarouselComponent implements OnInit {
  @Input() images: Array<Image> = [];
  @Input() selectedImage: number = 0;
  @Output() closeCarousel = new EventEmitter<void>();
  public animState = 'middle';
  public animImage: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.animImage = this.selectedImage;
  }

  close(): void {
    this.closeCarousel.emit();
  }

  previous(): void {
    this.animState = 'left';
    this.selectedImage = this.selectedImage > 0 ? this.selectedImage - 1 : this.images?.length - 1;
    this.blur();
  }

  next(): void {
    this.animState = 'right';
    this.selectedImage = this.selectedImage < this.images.length - 1 ? this.selectedImage + 1 : 0;
    this.blur();
  }

  animDone(): void {
    this.animImage = this.selectedImage;
    this.animState = 'middle';
  }

  onEvent(event: Event): void {
    event.stopPropagation();
  }

  private blur(): void {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement != null) {
      activeElement.blur();
    }
  }

}
