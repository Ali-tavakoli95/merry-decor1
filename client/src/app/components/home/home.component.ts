import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,VideoPlayerComponent ,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
