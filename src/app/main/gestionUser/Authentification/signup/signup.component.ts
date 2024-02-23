import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../../Responses/responseRequest';
import { Userservice } from 'app/Services/gestionUserServices/Userservice';
import { AuthenticationResponse } from '../../Responses/AuthenticationResponse';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerRequest: RegisterRequest = {
    Nom: '',
    Prenom: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: Userservice) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.registerRequest)
      .subscribe(
        (response: AuthenticationResponse) => {
          // Handle successful registration response
          console.log('Registration successful!', response);
          // Save token to local storage
          localStorage.setItem('token', response.token);
        },
        error => {
          // Handle registration error
          console.error('Registration failed!', error);
        }
      );
  }
}
