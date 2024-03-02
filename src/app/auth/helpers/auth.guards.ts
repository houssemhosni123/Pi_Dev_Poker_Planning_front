import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'app/auth/service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;

    if (currentUser) {
      // Check if the route is restricted by role
      if (route.data.roles && !route.data.roles.includes(currentUser.rolee)) {
        // Role not authorized, redirect to not-authorized page
        this._router.navigate(['/pages/miscellaneous/not-authorized']);
        return false;
      }
      
      // User has the required role, allow access to the route
      return true;
    }

    // Not logged in, so redirect to login page with the return URL
    this._router.navigate(['/pages/authentication/login-v2'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
