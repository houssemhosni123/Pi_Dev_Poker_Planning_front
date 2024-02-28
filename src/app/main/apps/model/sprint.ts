

export interface Sprint {
    idSprint: number;
    nomSprint: string;
    objectifSprint: string;
    dateDebutSprint: Date;
    dateFinSprint: Date;
    etatSprint: EtatSprint;
    
  }
  
  export enum EtatSprint {
    Planifié = 'Planifié',
    EnCours = 'En Cours',
    Terminé = 'Terminé'
  }
  