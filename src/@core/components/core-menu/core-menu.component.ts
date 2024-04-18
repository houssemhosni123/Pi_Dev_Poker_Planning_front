import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { AuthenticationService } from 'app/auth/service';
import { Role } from 'app/auth/models'; // Import the Role enum

@Component({
  selector: '[core-menu]',
  templateUrl: './core-menu.component.html',
  styleUrls: ['./core-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreMenuComponent implements OnInit {
  currentUser: any;
  role: Role; // Default role to User

  @Input() layout = 'vertical';
  @Input() menu: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _coreMenuService: CoreMenuService,
    private _authService: AuthenticationService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.menu = this.menu || this._coreMenuService.getCurrentMenu();

    // Get the current user and role from AuthenticationService
    const userRole = this._authService.getCurrentUserRole();

    if (userRole === Role.Admin) {
      this.role = Role.Admin;
    } else if (userRole === Role.ProductOwner) {
      this.role = Role.ProductOwner;
    } else if (userRole === Role.ScrumMaster) {
      this.role = Role.ScrumMaster;
    } else if (userRole === Role.developer) {
      this.role = Role.developer;
    } else {
      // Handle unknown roles or default role assignment
    }
    // Add other roles as needed

    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.menu = this._coreMenuService.getCurrentMenu();

      // Filter the menu based on the user's role
      this.menu = this.menu.filter(item => {
        if (!item.role || item.role.includes(this.role)) {
          return true;
        }
        return false;
      });

      this._changeDetectorRef.markForCheck();
    });
  }
}
