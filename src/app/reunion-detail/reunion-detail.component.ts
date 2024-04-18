import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionService } from 'app/Services/gestionReunionServices/ReunionService';
import { EventReff } from 'app/main/gestionReunion/ajouter-reunion/model';

@Component({
  selector: 'app-reunion-detail',
  templateUrl: './reunion-detail.component.html',
  styleUrls: ['./reunion-detail.component.scss']
})
export class ReunionDetailComponent implements OnInit {

  reunion: EventReff; // Utilisez le modèle EventReff pour définir le type de la réunion
  countdownInterval: any; // Stocke l'intervalle du compte à rebours
  differenceDeTemps: string; // Stocke la différence de temps sous forme de chaîne de caractères

  constructor(
    private route: ActivatedRoute,
    private reunionService: ReunionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.reunionService.getReunionById(id).subscribe(reunion => {
        this.reunion = reunion;

        // Calculer la différence de temps entre la date de début et maintenant
        this.calculerDifferenceDeTemps();
        
        // Mettre à jour le compte à rebours toutes les secondes
        this.countdownInterval = setInterval(() => {
          this.calculerDifferenceDeTemps();
        }, 1000);
      });
    });
  }

  ngOnDestroy(): void {
    // Nettoyer l'intervalle du compte à rebours lors de la destruction du composant
    clearInterval(this.countdownInterval);
  }
  getHours(time: string) {
    return time.split(':')[0];
  }
  
  getMinutes(time: string) {
    return time.split(':')[1];
  }
  
  getSeconds(time: string) {
    return time.split(':')[2];
  }
  calculerDifferenceDeTemps(): void {
    // Convertir la date de début de la réunion en objet Date
    const dateDebut = new Date(this.reunion.DateDebut_Reunion as string);
    const maintenant = new Date();
    
    // Vérifier si la date de début de la réunion est passée
    if (dateDebut < maintenant) {
        this.differenceDeTemps = '0:00:00';
        return; // Sortir de la fonction car la réunion est passée
    }

    // Calculer la différence de temps entre la date de début et maintenant
    const difference = dateDebut.getTime() - maintenant.getTime();

    // Calculer les heures, minutes et secondes restantes
    const heures = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    // Formater la chaîne de résultat
    this.differenceDeTemps = `${heures}:${minutes < 10 ? '0' : ''}${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;
}

}