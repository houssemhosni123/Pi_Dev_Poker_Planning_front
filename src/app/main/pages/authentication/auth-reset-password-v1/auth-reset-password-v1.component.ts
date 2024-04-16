import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CoreConfigService } from '@core/services/config.service';
import { UserService } from 'app/auth/service';

@Component({
  selector: 'app-auth-reset-password-v1',
  templateUrl: './auth-reset-password-v1.component.html',
  styleUrls: ['./auth-reset-password-v1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthResetPasswordV1Component implements OnInit {

  passwordTextType: boolean = false;
  confPasswordTextType: boolean = false;
  resetPasswordForm: UntypedFormGroup;
  submitted: boolean = false;
  message: string = '';

  private _unsubscribeAll: Subject<any>;

  coreConfig = {
    app: {
      appLogoImage: 'path/to/logo',
      appName: 'Your App Name'
    }
  };

  constructor(
    private _userService: UserService,
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder
  ) {
    this._unsubscribeAll = new Subject();

    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  ngOnInit(): void {
    this.resetPasswordForm = this._formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      // Handle config changes if needed
    });
  }

  togglePasswordTextType(): void {
    this.passwordTextType = !this.passwordTextType;
  }

  toggleConfPasswordTextType(): void {
    this.confPasswordTextType = !this.confPasswordTextType;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.value.newPassword;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;

      if (newPassword !== confirmPassword) {
        this.message = 'Passwords do not match.';
        return;
      }

      // Assuming you will use a token from the URL for password reset
      const token = new URLSearchParams(window.location.search).get('token');

      if (!token) {
        this.message = 'Token not found.';
        return;
      }

      this._userService.resetPassword(token, newPassword).subscribe(
        () => {
          this.message = 'Password reset successfully.';
        },
        (error) => {
          this.message = error.error.message || 'Failed to reset password.';
        }
      );
    }
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
