export class addSession {
  constructor(
    public idSession?: number,
    public nomSession?: string,
    public description?: string,
    public dateEtHeureDebut?: Date,
    public dateEtHeureFin?: Date,
    public type?: string,
    public statut?: string
  ) {}
}
