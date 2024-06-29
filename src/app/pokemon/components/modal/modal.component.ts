import { Component, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RepPokemonModal } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() apiUrl: string = '';
  public modalPokemon: RepPokemonModal = {};


  constructor(private http: HttpClient) {}

  convertToFeet(meters: any): string {
    const feet = meters / 10; // 1 metro = 3.281 pies
    return feet.toFixed(2); // Redondeamos a dos decimales
  }


  fetchDataFromApi() {
    this.http.get<RepPokemonModal>(this.apiUrl)
      .subscribe(
        (response) => {
          this.modalPokemon = response
          console.log('Respuesta de la API:', response.name);
          // Aquí puedes manejar la respuesta como necesites
        },
        (error: HttpErrorResponse) => {
          console.error('Error al obtener datos:', error.message);
          // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
        }
      );
  }
}
