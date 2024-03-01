import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { AuthenticationService, UserService } from 'app/auth/service';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { RegisterRequest } from 'app/main/gestionUser/Responses/RegisterRequest';

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
  constructor(private _userService:UserService,private _coreSidebarService: CoreSidebarService) {}

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
      this.toggleSidebar('new-user-sidebar');
    }
  }

  registerRequest: RegisterRequest = {
    Nom: '',
    Prenom: '',
    email: '',
    password: '',
    role: ''
  };
  authResponse: AuthenticationResponse = {
    token: '',
    role: ''
  };
  message = '';

  registerUser() {
    this.message = '';
    this._userService.register(this.registerRequest)
      .subscribe(  {
        
        next: (response) => {
          console.log(this.registerRequest)
          if (response) {
            this.authResponse = response;
            
          } else {
            
          }
        }
      });

  }




  ngOnInit(): void {}
}
