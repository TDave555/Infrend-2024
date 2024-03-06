import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  router = inject(Router);

  storageService = inject(StorageService);

  refuseGuest(): boolean {
    const username = this.storageService.getUsername();
    if(!username) {
      this.router.navigateByUrl('/welcome');
      return false;
    }

    return true;
  }

  refuseUser(): boolean {
    const username = this.storageService.getUsername();
    if(username) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }

}
