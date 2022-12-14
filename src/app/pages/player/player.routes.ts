import { ListaMusicasComponent } from './../../components/lista-musicas/lista-musicas.component';
import { HomeComponent } from './../home/home.component';
import { PlayerComponent } from './player/player.component';
import { Routes } from '@angular/router';
import { ListaArtistasComponent } from 'src/app/components/lista-artistas/lista-artistas.component';

export const PlayerRotas: Routes = [
  {
    path: '',
    component: PlayerComponent, //assim que acessa o módulo de player, essa rota é carregada
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'lista/:tipo/:id',
        component: ListaMusicasComponent
      },
      {
        path: 'lista/artistas',
        component: ListaArtistasComponent
      }
    ]
  },
];
