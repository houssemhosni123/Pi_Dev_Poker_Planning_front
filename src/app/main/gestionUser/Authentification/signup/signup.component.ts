import { Component, OnInit } from '@angular/core';
import { Userservice } from 'app/Services/gestionUserServices/Userservice';
import { AuthenticationResponse } from '../../Responses/AuthenticationResponse';
import { RegisterRequest } from '../../Responses/RegisterRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  /*registerRequest: RegisterRequest = {
    Nom: '',
    Prenom: '',
    email: '',
    password: '',
    role: ''
  };*/

  constructor(private authService: Userservice,private router: Router) { }

  ngOnInit(): void {
  }
  registerRequest: RegisterRequest = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: '',
    photo:''
  };
  authResponse: AuthenticationResponse = {
    token: '',
    rolee: ''
  };
  message = '';
  /* register(): void {
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
  }*/
 /* registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            
          }
        }
      });

  }*/
}
