import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatComponent } from './chat/chat.component';
import { inject } from '@angular/core';
import { UserGuardService } from './services/user-guard.service';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ () => inject(UserGuardService).refuseUser() ]
  },

  {
    path: '',
    component: ChatComponent,
    canActivate:  [ () => inject(UserGuardService).refuseGuest() ]
  }
];
