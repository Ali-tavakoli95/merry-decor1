import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../models/image.model';
import { GalleryCarouselComponent } from '../gallery-carousel/gallery-carousel.component';

@Component({
  selector: 'app-work-samples',
  standalone: true,
  imports: [CommonModule, GalleryCarouselComponent],
  templateUrl: './work-samples.component.html',
  styleUrl: './work-samples.component.scss'
})
export class WorkSamplesComponent implements OnInit {
  public selectedImage: number | null = null;

  images = [{
    url: './assets/images/work-samples/IMG_8438.JPG',
  },
  {
    url: './assets/images/work-samples/IMG_8439.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8442.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8444.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8445.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8446.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8447.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8448.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8449.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8450.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8451.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8452.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8453.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8454.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8455.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8456.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8457.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8458.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8459.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8460.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8461.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8462.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8463.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8464.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8465.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8466.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8467.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8468.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8469.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8470.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8471.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8472.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8473.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8474.JPG'
  },
  {
    url: './assets/images/work-samples/IMG_8475.JPG'
  },
  ] as Array<Image>;

  constructor() { }

  ngOnInit(): void {

  }
}
