import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  ultimosLanzamientos: any[] = [];

  constructor(private servicioSpotify: SpotifyService) {
    this.servicioSpotify.traerLanzamientos().subscribe((data: any) => {
      this.ultimosLanzamientos = data
    });
  }
}
