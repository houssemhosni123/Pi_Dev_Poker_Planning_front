

import { UserStory } from '../model/userStory'; 
export interface TacheTechnique {
  idTacheTechnique: number;
  nomTacheTechnique: string;
  descriptionTacheTechnique: string;
//userStory: UserStory;
  dateCreation: Date;
  dateModification?: Date;
  statut_TT: StatutTacheTechnique;
}

// statut-tache-technique.enum.ts

export enum StatutTacheTechnique {
  Encours = 'Encours',
  Afaire = 'Afaire',
  Terminee = 'Terminee'
}
