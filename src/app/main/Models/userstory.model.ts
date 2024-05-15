export interface Userstory {
  titreUS: string;
  description_US: string;
  velocite_US: number;
  statut_US: "Afaire" | "Encours" | "Terminée";
  projet_id: number;
  nomProjet: string;
}
