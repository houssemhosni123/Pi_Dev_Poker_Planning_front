import { Projet1 } from "./Projet";
import { User } from "./user";

export interface Tache {
    idTache: number;
    description: string;
    remainingDays: number;
    dateCreation: Date;
    dateDebutTache: Date; // New attribute
    dateFinTache: Date;
    tacheProjet: RoleProjet;
    lieu: Location;
    projet: Projet1;
    user: User;
  }
  
  export enum RoleProjet {
    ProductOwner = 'ProductOwner',
    ScrumMaster = 'ScrumMaster',
    Developer = 'Developer'
  }
  
  export enum Location {
    OFFICE = 'OFFICE',
    REMOTE = 'REMOTE',
    // Add more location constants here as needed
  }
  
