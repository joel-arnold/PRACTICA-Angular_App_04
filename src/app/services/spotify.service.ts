import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  ultimosLanzazamientos: any;
  tokenSpotify: string =
    'Bearer BQDVvMDyXNhDUBKJ5-LtPCPUPC6J49XcAEa1nVGjUZc0tMdr_-tA3kKfmf8PIUZYNZJk92qMQkCy3m_5NgQ';

  constructor(private http: HttpClient) {
    console.log('Servicio de spotify andando');
  }

  hacerConsulta(consulta: string) {
    const URL = `https://api.spotify.com/v1/${consulta}`;
    const headers = new HttpHeaders({
      Authorization: this.tokenSpotify
    });

    return this.http.get(URL, { headers })
  }

  traerLanzamientos() {
      const CONSULTA = 'browse/new-releases?limit=50'
      
      return this.hacerConsulta(CONSULTA)
            .pipe(map((data) => data['albums'].items));
  }

  buscarArtistas(cadenaBusqueda: string) {
    const CONSULTA = `search?q=${cadenaBusqueda}&type=artist&limit=50`
    
    return this.hacerConsulta(CONSULTA)
      .pipe(map((data) => data['artists'].items));
  }

  buscarArtista( id: string ) {
    return this.hacerConsulta(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));
  }

  obtenerMasEscuchadas( id: string ) {
    return this.hacerConsulta(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }
}
