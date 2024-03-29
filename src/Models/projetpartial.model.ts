import { Userstory } from "./userstory.model";

export interface ProjetPartial {
    idProjet: number;
    Nom_Projet: string;
    Client: string;
    Description_Projet: string;
    DateDebut_Projet: Date;
    DateFin_Projet: Date;
    userStory: Userstory[];
  }
  