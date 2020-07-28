import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  ultimosLanzazamientos: any;
  tokenSpotify: string =
    'Bearer BQAPmEtMfcm-q8bH7PmT9GhGmfxPXlATgkTu7WUy1HSCDTWFvKTTpvQGz5g7SnIP-iyiLNTLUFLmqJbjEbk';

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
      const CONSULTA = 'browse/new-releases?country=AR&limit=15'
      
      return this.hacerConsulta(CONSULTA)
            .pipe(map((data) => data['albums'].items));
  }

  buscarArtista(cadenaBusqueda: string) {
    const CONSULTA = `search?q=${cadenaBusqueda}&type=artist&limit=15`
    
    return this.hacerConsulta(CONSULTA)
      .pipe(map((data) => data['artists'].items));
  }
}
