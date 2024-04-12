

//import { Projet } from './projet.model'; // Assurez-vous d'importer correctement le modèle Projet
import { SprintBacklog } from '../model/sprintBacklog'; // Assurez-vous d'importer correctement le modèle SprintBacklog
import { TacheTechnique } from '../model/tachTechnique'; // Assurez-vous d'importer correctement le modèle TacheTechnique
//import { Session } from './session.model'; // Assurez-vous d'importer correctement le modèle Session

export interface UserStory {
  idUserStory: number;
  titre_US: string;
  description_US: string;
  statut_US: StatutUserStory;
  velocite_US: number;
 // projet: Projet;
  sprintBacklog: SprintBacklog;
  tacheTechniques: TacheTechnique[];
 // session: Session;
}



export enum StatutUserStory {
  Encours = 'Encours',
  Afaire = 'Afaire',
  Terminee = 'Terminee'
}
