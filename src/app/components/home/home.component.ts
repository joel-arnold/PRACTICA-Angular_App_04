import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  ultimosLanzamientos: any[] = [];
  cargando: boolean
  
  error: boolean;
  mensajeError: string;

  constructor(private servicioSpotify: SpotifyService) {
    this.error = false;
    this.cargando = true

    this.servicioSpotify.traerLanzamientos().subscribe((data: any) => {
      this.ultimosLanzamientos = data
      this.cargando = false
    },
    ( errorServicio ) => {

      this.cargando = false;
      this.error = true;
      console.log(errorServicio.error.error.message);
      this.mensajeError = errorServicio.error.error.message;

    }
    );
  }
}
