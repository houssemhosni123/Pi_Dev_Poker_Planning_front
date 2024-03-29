import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service';
import { TacheService } from 'app/Services/gestionTacheProjet/tacheProjet';
import { Tache } from 'app/auth/models/TacheProjet';
import { Projet } from 'Models/projet.model';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { Projet1 } from 'app/auth/models/Projet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-tache-projet',
  templateUrl: './ajouter-tache-projet.component.html',
  styleUrls: ['./ajouter-tache-projet.component.scss']
})
export class AjouterTacheProjetComponent implements OnInit {
  projets:Projet1[];

  users: User[];
  filteredUsers: User[];
  selectedRole: string = 'All';
  taskDetailsForm: FormGroup;
  searchText: string = '';
  showUserCard: boolean = false;
  showProjectCard: boolean = false;
  snackBar: any;

  constructor(private toastr: ToastrService,private _projetService: ProjetService,private formBuilder: FormBuilder,private userService: UserService,private _tacheService: TacheService) {
    this.taskDetailsForm = this.formBuilder.group({
      description: [''],
      dateCreation: [''],
      tacheProjet: [''],
      lieu: [''],
      user: [''], // This will hold the ID of the selected user
      selectedUser: [''], // This will display the selected user's nom and prenom
      selectedProject: [''],
      projet: ['']
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.loadProjets();

  }

  getUsers(): void {
    this.userService.getAll().subscribe(
      (users: User[]) => {
        this.users = users;
        this.applyRoleFilter(); // Apply filter initially
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  loadProjets(): void {
    this._projetService.getProjets1().subscribe((data:Projet1[]) => {
        this.projets = data;
        console.log(this.projets)
      },
      (error) => {
        console.log(error);
      }
    );
    
}
  applyRoleFilter(): void {
    if (this.selectedRole === 'All') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.rolee === this.selectedRole);
    }
  }

  addUserToTask(user: User): void {
    // Set the selected user's nom and prenom in the form
    this.taskDetailsForm.patchValue({
      selectedUser: `${user.nom} ${user.prenom}`,
      user: user.idUser // Set the selected user's ID
    });
  }
  addProjectToTask(projet: Projet1): void {
    // Set the selected user's nom and prenom in the form
    this.taskDetailsForm.patchValue({
      selectedProject: `${projet.nom_Projet}`,
      projet: projet.idProjet// Set the selected user's ID
    });
  }
  
  filterUsers(): void {
    if (!this.searchText) {
      this.filteredUsers = this.users;
    } else {
      const searchTerm = this.searchText.toLowerCase();
      this.filteredUsers = this.users.filter(user =>
        user.nom.toLowerCase().includes(searchTerm) || user.prenom.toLowerCase().includes(searchTerm)
      );
    }
  }
  addTask(): void {
    const tache = this.taskDetailsForm.value as Tache;
    const idProjet = this.taskDetailsForm.get('projet').value;
    const idUser = this.taskDetailsForm.get('user').value;
    
    this._tacheService.addTache(tache, idUser, idProjet).subscribe(
      (response) => {
        console.log('Task added successfully:', response);
        this.taskDetailsForm.reset();
        
        setTimeout(() => {
          this.toastr.success(
            'Task added successfully!', // Message
            'Success', // Title
            { closeButton: true } // Options
          );
        }, 2500);
      },
      (error) => {
        console.error('Error adding task:', error);
      }
    );
  }

showSuccess(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000, // Duration in milliseconds
    panelClass: ['success-snackbar'] // Custom CSS class for styling
  });
}

  showUserList() {
    this.showUserCard = true;
    this.showProjectCard = false;
  }

  // Method to handle showing the list of projects card
  showProjectList() {
    this.showProjectCard = true;
    this.showUserCard = false;
  }
}
