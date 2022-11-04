import { PlayerComponent } from './player/player.component';
import { Routes } from '@angular/router';

export const PlayerRotas: Routes = [
  {
    path: '',
    component: PlayerComponent, //assim que acessa o módulo de player, essa rota é carregada
  },
];