import { StatutUserStory } from "./statut_us.enum";
import { Userstory } from './userstory.model';


/*export interface Projet {
  Nom_Projet: string;
  Client: string;
  Description_Projet: string;
  DateDebut_Projet: string;
  DateFin_Projet: string;
  userStory: Userstory[]; 
}*/

export interface Projet {

  nom_Projet: string;
  client: string;
  description_Projet: string;
  dateDebut_Projet: string;
  dateFin_Projet: string;
  userStory: Userstory[]; 

  
};







  
  
  