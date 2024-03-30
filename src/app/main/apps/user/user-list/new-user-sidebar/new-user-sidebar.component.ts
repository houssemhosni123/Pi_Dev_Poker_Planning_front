import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public photo: string; // Changed type to string
  selectedFile: File | null = null;
  private idUser: number; // Removed default value

  constructor(
    private route: ActivatedRoute,
    private _toastrService: ToastrService,
    private _userService: UserService,
    private _coreSidebarService: CoreSidebarService
  ) {}

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  submit(form) {
    if (form.valid) {
      this.registerUser();
      this.toggleSidebar('new-user-sidebar');
    }
  }

  // Method to handle file selection
  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  

  // Method to convert file to base64
 

  registerRequest: RegisterRequest = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: '',
    photo: ''
  };

  authResponse: AuthenticationResponse = {
    token: '',
    rolee: ''
  };

  message = '';

  registerUser() {
    this.message = '';
    // Set photo in register request

    this._userService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          console.log(this.registerRequest);
          if (response) {
            this.authResponse = response;
            const userRole = this.authResponse.rolee;
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
          console.error('Error during user registration:', error);
        }
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idUser = params['id'] || 1; // Use a default value if id is undefined
    });
  }
}
