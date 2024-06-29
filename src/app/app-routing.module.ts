import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListPageComponent } from './pokemon/pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonFavoritePageComponent } from './pokemon/pages/pokemon-favorite-page/pokemon-favorite-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: PokemonListPageComponent
  },
  {
    path: 'favorite',
    component: PokemonFavoritePageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
