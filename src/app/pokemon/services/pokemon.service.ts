import { Injectable } from '@angular/core';
import { RepPokemonList, Result, PokemonDetail, favorite } from '../interfaces/pokemon.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _baseUrl: string = 'https://pokeapi.co/api/v2/';
  public repPokemonList: Result[] = [];
  public favPokemonList: favorite[] = [];  // Lista de Pokémon favoritos

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<RepPokemonList> {
    const params = new HttpParams()
      .set('limit', '100')  // Cambia el límite según necesites
      .set('offset', '0');

    return this.http.get<RepPokemonList>(`${this._baseUrl}pokemon`, { params }).pipe(
      tap(response => this.repPokemonList = response.results)
    );
  }

  getPokemonDetail(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url);
  }

  toggleFavorite(pokemon: Result) {
    const index = this.favPokemonList.findIndex(p => p.name === pokemon.name);
    if (index === -1) {
      const newFavorite: favorite = {
        name: pokemon.name,
        alias: pokemon.name,
        createdAt: new Date(),
        isFavorite: true
      };
      this.favPokemonList.push(newFavorite);
    } else {
      this.favPokemonList.splice(index, 1);
    }
  }

  isFavorite(pokemon: Result): boolean {
    return this.favPokemonList.some(p => p.name === pokemon.name);
  }
}
