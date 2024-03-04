import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { UserService } from 'app/auth/service/user.service';
import { AuthenticationService } from 'app/auth/service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/auth/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  changePasswordForm: FormGroup;
  submitted = false;

  public currentUser: User;
  userId: number;
  user: any;
  userForm: FormGroup;
  // public
  public contentHeader: object;
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private fb: FormBuilder,private _AuthenticationService:AuthenticationService,private _userService:UserService,private _accountSettingsService: AccountSettingsService) {
   
    
    this._unsubscribeAll = new Subject();
    this.initForm();
  }
  get f() { return this.changePasswordForm.controls; }
  

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    }

    // Call change password API
    this._userService.changePassword(this.changePasswordForm.value)
      .subscribe(
        data => {
          console.log('Password changed successfully', data);
          // Reset form after successful password change
          this.changePasswordForm.reset();
          this.submitted = false;
          // TODO: Show success message to the user
        },
        error => {
          console.error('Error changing password:', error);
          // TODO: Handle error, show error message to the user
        }
      );
  }
// image crud

//Gets called when the user selects an image



 /*Gets called when the user clicks on submit to upload the image
 onUpload() {
  console.log(this.selectedFile);

  // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  // Make a call to the Spring Boot Application to save the image
  this.http.post('http://localhost:8081/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
}*/


//Gets called when the user clicks on retieve image button to get the image from back end





















  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Password Text Type Old
   */
  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
  }

  /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  initForm(): void {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],

    });
  }

  getUserById(): void {
    // Assuming this.userId is already defined
    this._userService.getUserById(this.userId).subscribe(
      (response) => {
        this.user = response;
        this.userForm.patchValue(this.user); // Update the form with user data
        console.log(this.user); // Log the user data to the console or use it as needed
      },
      (error) => {
        console.error('Error occurred while fetching user:', error);
      }
    );
  }

  updateUser(userForm: FormGroup) {
    // Check if the form is valid
    if (userForm.valid) {
      // Extract the user object from the form group's value
      const user = userForm.value;
  
      // Call the update user service method with the user ID and user object
      this._userService.updateUser(this.userId, user).subscribe(
        (response) => {
          console.log('User updated successfully:', response);
          
          // Update the user in the localStorage
          localStorage.setItem('currentUser', JSON.stringify(response));
          console.log('Updated user saved to localStorage.');
          
          // Handle success, show a success message, etc.
        },
        (error) => {
          console.error('Error occurred while updating user:', error);
          // Handle error, show an error message, etc.
        }
      );
    } else {
      console.error('Form is invalid. Cannot update user.');
      // Handle invalid form scenario if needed
    }
}





  ngOnInit() {

    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmationPassword: ['', Validators.required]
    });
    
    this.userId = this._AuthenticationService.idUser;// Retrieve userId from localStorage
    if (!this.userId) {
      console.error(this.userId,'User ID not found in localStorage');
      return;
    }
    this.initForm();
    this.getUserById();








    this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.avatarImage = this.data.accountSetting.general.avatar;

    });

    // content header
    this.contentHeader = {
      headerTitle: 'Account Settings',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Account Settings',
            isLink: false
          }
        ]
      }
    }
    
    
    
    
    
    ;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}