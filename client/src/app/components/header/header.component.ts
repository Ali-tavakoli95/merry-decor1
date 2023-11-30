import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
