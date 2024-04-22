import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { LoginService } from '../service/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  return inject(LoginService).isLoggedIn() ? true : inject(Router).createUrlTree(["/login"])
};
