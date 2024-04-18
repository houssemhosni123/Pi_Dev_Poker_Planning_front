import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estimation } from 'app/Model/estimation';
import { chatStartedservice } from 'app/Services/gestionIterationServices/chatstartservice';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';
import { WebSocketService } from 'app/Services/gestionIterationServices/webSocketservice.service';
import { User } from 'app/auth/models';
@Component({
  selector: 'app-vote-estimations',
  templateUrl: './vote-estimations.component.html',
  styleUrls: ['./vote-estimations.component.scss']
})
export class VoteEstimationsComponent implements OnInit {
  estimations: Estimation[] = [];
  constructor(private estimationService: EstimationserviceService,private router:Router,private webSocketService: chatStartedservice) { }
  ShowchatIterface(): void {
    // Utilisez la méthode navigateByUrl pour naviguer vers la route avec l'ID
  
    this.router.navigateByUrl(`/Iteration/chatIteration`);
  }
  ngOnInit(): void {
    
    this.estimationService.ShowEstimationForLastIteration().subscribe(estimations => {
      this.estimations = estimations;
    });

    // Abonnez-vous aux nouvelles estimations en temps réel
    this.estimationService.getEstimations().subscribe((estimation: Estimation) => {
      // Ajoutez la nouvelle estimation à la liste des estimations
      this.estimations.push(estimation);
    });
    this.webSocketService.getChatStarted().subscribe(() => {
      this.ShowchatIterface();
    });
  }
  getUserImageUrl(user: User): string {
    return `http://localhost:8080/downloadFileByName/${user.photo}`;
  }
  lancerchat(): void {
    // Lancer le chat lorsque le bouton est cliqué
    this.webSocketService.startChat();
  }
  }


