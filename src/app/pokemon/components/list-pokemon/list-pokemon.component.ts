import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Result, PokemonDetail } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-list',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  public pokemonsList: Result[] = [];
  public paginatedPokemons: (Result & { sprite: string })[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 8;
  public totalPages: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemons => {
      this.pokemonsList = pokemons.results;
      this.totalPages = Math.ceil(this.pokemonsList.length / this.itemsPerPage);
      this.updatePaginatedPokemons();
    });
  }

  updatePaginatedPokemons() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentPokemons = this.pokemonsList.slice(startIndex, endIndex);

    // Resetea la lista de paginatedPokemons
    this.paginatedPokemons = [];

    // Obtén los detalles de cada Pokémon para obtener sus sprites
    currentPokemons.forEach(pokemon => {
      this.pokemonService.getPokemonDetail(pokemon.url).subscribe(detail => {
        this.paginatedPokemons.push({ ...pokemon, sprite: detail.sprites.front_default });
      });
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedPokemons();
  }

  toggleFavorite(pokemon: Result) {
    this.pokemonService.toggleFavorite(pokemon);
  }

  isFavorite(pokemon: Result): boolean {
    return this.pokemonService.isFavorite(pokemon);
  }
}
