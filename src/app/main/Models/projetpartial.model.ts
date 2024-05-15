import { Userstory } from "./userstory.model";

export interface ProjetPartial {
  idProjet: number;
  nomProjet: string;
  Client: string;
  Description_Projet: string;
  DateDebut_Projet: Date;
  DateFin_Projet: Date;
  userStory: Userstory[];
}
