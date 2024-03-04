// login.component.ts

/*import { Component } from '@angular/core';
import { Userservice } from 'app/Services/Userservice';
import { AuthenticationRequest } from '../AuthenticationRequest';
import { AuthenticationResponse } from 'app/AuthenticationResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  authenticationRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: Userservice,private http: HttpClient) { }

  ngOnInit(): void {
    // Retrieve token from local storage if available
    const token = localStorage.getItem('token');
    if (token) {
      // Handle token, you may choose to redirect user to another page if token is present
      console.log('Token retrieved from local storage:', token);
    }
  }

  login(): void {
    this.authService.authenticate(this.authenticationRequest)
      .subscribe(
        (response: AuthenticationResponse) => {
          // Handle successful authentication response
          console.log('Authentication successful!', response);
          // Save token to local storage
          localStorage.setItem('token', response.token);
          
          // Include the token in authorization header
          const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + response.token
          });
  
          // Example: Make a secured API request with the token in the header
          // Replace 'secured-api-endpoint' with your actual API endpoint
          this.http.get('secured-api-endpoint', { headers })
            .subscribe(
              (data) => {
                // Handle successful response from secured API
                console.log('Secured API response:', data);
              },
              (error) => {
                // Handle error response from secured API
                console.error('Secured API error:', error);
              }
            );
            
          // Redirect or perform any other action upon successful login
        },
        error => {
          // Handle authentication error
          console.error('Authentication failed!', error);
        }
      );
  }
}*/
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Userservice } from 'app/Services/gestionUserServices/Userservice';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { AuthenticationRequest } from '../../Requests/AuthenticationRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*authenticationRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };*/
  authRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };

  authResponse: AuthenticationResponse = {
    token: '',
    rolee: ''
  };

  constructor(private authService: Userservice, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Retrieve token from local storage if available
    const token = localStorage.getItem('token');
    /*if (token) {
      // Redirect user to dashboard based on their role
      this.redirectBasedOnRole(response.role);
    }*/
  }

 /* login(): void {
    this.authService.login(this.authenticationRequest)
      .subscribe(
        (response: AuthenticationResponse) => {
          // Handle successful authentication response
          console.log('Authentication successful!', response);
          // Save token to local storage
          localStorage.setItem('token', response.token);
          
          // Redirect user to dashboard based on their role
          this.redirectBasedOnRole(response.role);
        },
        error => {
          // Handle authentication error
          console.error('Authentication failed!', error);
        }
      );
  }*/

 /* redirectBasedOnRole(role: string): void {
    switch (role) {
      case 'Admin':
        this.router.navigate(['/admin']);
        break;
      case 'ProductOwner':
        this.router.navigate(['/product-owner']);
        break;
      case 'ScrumMaster':
        this.router.navigate(['/registres']);
        break;
      case 'Developer':
        this.router.navigate(['/adminaa']);
        break;
      default:
        this.router.navigate(['/']);
    }
  }*/
  authenticate() {
    // Check if email and password are provided and not empty
    if (!this.authRequest.email || !this.authRequest.password) {
      // Handle validation error (e.g., display error message to user)
      console.error('Email and password are required');
      return;
    }
  
    // Proceed with login request
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          // Store token in local storage
          localStorage.setItem('token', response.token as string);
          
          // Redirect user to another page
          this.router.navigate(['/User']); // Replace '/dashboard' with the desired route
        },
        error: (error) => {
          // Handle authentication error (e.g., display error message to user)
          console.error('Authentication failed:', error);
        }
      });
  }
  
}