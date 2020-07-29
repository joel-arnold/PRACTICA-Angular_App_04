import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  resultado: any[] = []
  cargando: boolean

  constructor(private servicioSpotify: SpotifyService) {}

  buscar(cadenaBusqueda: string){
    this.cargando = true
    this.servicioSpotify.buscarArtistas(cadenaBusqueda)
    .subscribe( (respuesta: any) => {
      this.resultado = respuesta
      this.cargando = false
    })
  }

}