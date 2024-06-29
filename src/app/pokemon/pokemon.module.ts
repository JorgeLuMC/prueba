import { NgModule } from '@angular/core';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonFavoritePageComponent } from './pages/pokemon-favorite-page/pokemon-favorite-page.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
  PokemonListPageComponent,
  PokemonFavoritePageComponent,
  ListPokemonComponent,
  ModalComponent
],
  exports: [
    PokemonListPageComponent,
    PokemonFavoritePageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PokemonModule { }
