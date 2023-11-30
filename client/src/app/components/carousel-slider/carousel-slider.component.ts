import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImage } from '../../models/carousel-image.model';

@Component({
  selector: 'app-carousel-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-slider.component.html',
  styleUrl: './carousel-slider.component.scss'
})
export class CarouselSliderComponent implements OnInit {
  @Input() images: CarouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //Default to 3 second

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //sets index of image on dot/indicator click
  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  //Changes slide in every 3 second
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

}
