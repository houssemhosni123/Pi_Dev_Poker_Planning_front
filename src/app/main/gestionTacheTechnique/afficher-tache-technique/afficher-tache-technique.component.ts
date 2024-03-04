import { Component, OnInit } from '@angular/core';
import { TacheTechnique } from '../../apps/model/tachTechnique';
import { TacheTechniqueService } from '../../../Services/gestionTacheTechnique/TacheTechniqueService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-tache-technique',
  templateUrl: './afficher-tache-technique.component.html',
  styleUrls: ['./afficher-tache-technique.component.scss']
})
export class AfficherTacheTechniqueComponent implements OnInit {

  tacheTechniques: TacheTechnique[] | null = null;
 

  constructor(private tacheTechniqueService: TacheTechniqueService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTacheTechniques();
  }

  getAllTacheTechniques(): void {
    this.tacheTechniqueService.getAllTacheTechniques()
      .subscribe(tacheTechniques => {
        this.tacheTechniques = tacheTechniques;
       
      });
  }

  ouvrirFormulaireUpdate(id: number): void {
    this.router.navigate(['/TT', id, 'tacheTechnique']);
  }

  deleteTacheTechnique(id: number): void {
    this.tacheTechniqueService.deleteTacheTechnique(id).subscribe(
      () => {
        console.log('Tâche technique supprimée avec succès !');
        // Rechargez la liste des tâches après la suppression si nécessaire
        this.getAllTacheTechniques();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la tâche technique :', error);
      }
    );
  }


  
}
