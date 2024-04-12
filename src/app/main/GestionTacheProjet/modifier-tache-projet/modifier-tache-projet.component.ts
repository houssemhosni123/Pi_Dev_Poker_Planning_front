import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';
import { TacheService } from 'app/Services/gestionTacheProjet/tacheProjet';
import { User } from 'app/auth/models';
import { Projet1 } from 'app/auth/models/Projet';
import { Tache } from 'app/auth/models/TacheProjet';
import { UserService } from 'app/auth/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-tache-projet',
  templateUrl: './modifier-tache-projet.component.html',
  styleUrls: ['./modifier-tache-projet.component.scss']
})
export class ModifierTacheProjetComponent implements OnInit {
  projets: Projet1[];
  users: User[];
  filteredUsers: User[];
  selectedRole: string = 'All';
  taskDetailsForm: FormGroup;
  searchText: string = '';
  showUserCard: boolean = false;
  showProjectCard: boolean = false;
  tache: Tache; 
  TacheForm : FormGroup;

  constructor(
    private _projetService: ProjetService,
    private toastr: ToastrService,
    private userService: UserService,
    private _TacheService:TacheService,
    private route: ActivatedRoute,
    private router: Router ,
    private formbuilder:FormBuilder) {


      this.taskDetailsForm = this.formbuilder.group({
        description: [''],
        remainingDays:[''],
        tacheProjet: [''],
        lieu: [''],
        user: [''],
        selectedUser: [''],
        selectedProject: [''],
        projet: [''],
        dateDebutTache: [''],
        dateFinTache: ['']
      });
     }



    
  ngOnInit(): void {

    this.getUsers();
    this.loadProjets();

    

    this._TacheService.getTacheById(this.route.snapshot.params.id).subscribe(data => {
      const user = data.user;
    const projet=data.projet
      this.taskDetailsForm.patchValue({
        description: data.description,
        dateDebutTache: data.dateDebutTache,
        lieu: data.lieu,
        tacheProjet: data.tacheProjet,
        dateFinTache: data.dateFinTache,
        projet: projet.idProjet, // Assigning the project ID here
        selectedProject: projet.nom_Projet ,// Displaying project name here
        user: user.idUser, // Assigning the user ID here
        selectedUser: `${user.nom} ${user.prenom}` // Displaying full name here
      });
      console.log(data);
    });
    
  }
 
  updateTask(): void {
    const id = this.route.snapshot.params.id;
    const updatedTache = this.taskDetailsForm.value as Tache;
  
    this.updateTacheById(id, updatedTache);
    this.router.navigateByUrl('/TacheProjet/AfficherTacheProjet');

  }
  
  updateTacheById(id: number, updatedTache: Tache): void {
    this._TacheService.updateTache(id, updatedTache)
      .subscribe(updated => {
        // Handle success
        console.log('Task updated successfully:', updated);
        // Optionally, update the local data if needed
      }, error => {
        // Handle error
        console.error('Error updating task:', error);
      });
  }
  

  getUsers(): void {
    this.userService.getAll().subscribe(
      (users: User[]) => {
        this.users = users;
        this.applyRoleFilter();
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  loadProjets(): void {
    this._projetService.getProjets1().subscribe(
      (data: Projet1[]) => {
        this.projets = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
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
    this.taskDetailsForm.patchValue({
      selectedUser: `${user.nom} ${user.prenom}`,
      user: user.idUser
    });
  }

  addProjectToTask(projet: Projet1): void {
    const dateDebutTache = new Date(projet.dateDebut_Projet);
    const dateFinTache = new Date(projet.dateFin_Projet);

    this.taskDetailsForm.patchValue({
      selectedProject: `${projet.nom_Projet}`,
      projet: projet.idProjet,
      dateDebutTache: dateDebutTache,
      dateFinTache: dateFinTache
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
  
    this._TacheService.addTache(tache).subscribe(
      (response) => {
        console.log('Task added successfully:', response);
        this.taskDetailsForm.reset();
        
        setTimeout(() => {
          this.toastr.success(
            'Task added successfully!',
            'Success',
            { closeButton: true }
          );
        }, 2500);
      },
      (error) => {
        console.error('Error adding task:', error);
        this.toastr.error(
          'An error occurred while adding the task. Please try again.',
          'Error',
          { closeButton: true }
        );
      }
    );
  }

  showUserList() {
    this.showUserCard = true;
    this.showProjectCard = false;
  }

  showProjectList() {
    this.showProjectCard = true;
    this.showUserCard = false;
  }
}
