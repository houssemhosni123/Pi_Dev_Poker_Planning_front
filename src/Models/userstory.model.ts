
export interface Userstory {
     titre_US:string;
     description_US:string;
     velocite_US:number;
     statut_US: 'Afaire' | 'Encours' | 'Terminée';
     projet_id: number; 
     nom_Projet: string; 
}
