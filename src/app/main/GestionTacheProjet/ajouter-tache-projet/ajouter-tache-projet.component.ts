import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service';
import { TacheService } from 'app/Services/gestionTacheProjet/tacheProjet';
import { Tache } from 'app/auth/models/TacheProjet';
import { Projet1 } from 'app/auth/models/Projet';
import { ToastrService } from 'ngx-toastr';
import { ProjetService } from 'app/Services/gestionProjetServices/ProjetServices';

@Component({
  selector: 'app-ajouter-tache-projet',
  templateUrl: './ajouter-tache-projet.component.html',
  styleUrls: ['./ajouter-tache-projet.component.scss']
})
export class AjouterTacheProjetComponent implements OnInit {
  projets: Projet1[];
  users: User[];
  filteredUsers: User[];
  selectedRole: string = 'All';
  taskDetailsForm: FormGroup;
  searchText: string = '';
  showUserCard: boolean = false;
  showProjectCard: boolean = false;

  constructor(
    private _projetService: ProjetService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _tacheService: TacheService
  ) {
      this.taskDetailsForm = this.formBuilder.group({
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
  
    this._tacheService.addTache(tache).subscribe(
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
