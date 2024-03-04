import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { AuthenticationService, UserService } from 'app/auth/service';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { RegisterRequest } from 'app/main/gestionUser/Responses/RegisterRequest';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  public fullname;
  public username;
  public email;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor( private _toastrService: ToastrService,private _userService:UserService,private _coreSidebarService: CoreSidebarService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this.registerUser();
      this.toggleSidebar('new-user-sidebar');
    }
  }
  registerRequest: RegisterRequest = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: ''
  };
  authResponse: AuthenticationResponse = {
    token: '',
    rolee: ''
  };
  message = '';
  registerUser() {
    this.message = '';
    this._userService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          console.log(this.registerRequest);
          if (response) {
            this.authResponse = response;

            // Assuming user's role is available in authResponse
            const userRole = this.authResponse.rolee;

            // Display success message after a delay
            setTimeout(() => {
              this._toastrService.success(
                'You have registered a user with role: ' + userRole,
                'Registration Successful!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);
          } else {
            // Handle unexpected response
          }
        },
        error: (error) => {
          // Handle error response
          console.error('Error during user registration:', error);
          // You can also show an error toast here if needed
        }
      });
}




  ngOnInit(): void {}
}
