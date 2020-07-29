import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [],
})
export class TarjetasComponent {
  @Input() items: any[] = [];
  idArtista: string;

  constructor(private enrutador: Router) {}

  verArtista(item: any) {
    if (item.type === 'artist') {
      this.idArtista = item.id;
    } else {
      this.idArtista = item.artists[0].id;
    }

    this.enrutador.navigate(['/artist', this.idArtista])
  }
}
