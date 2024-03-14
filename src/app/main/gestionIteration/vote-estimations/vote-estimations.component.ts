import { Component, OnInit } from '@angular/core';
import { Estimation } from 'app/Model/estimation';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';

@Component({
  selector: 'app-vote-estimations',
  templateUrl: './vote-estimations.component.html',
  styleUrls: ['./vote-estimations.component.scss']
})
export class VoteEstimationsComponent implements OnInit {
  estimations: Estimation[] = [];
  constructor(private estimationService: EstimationserviceService) { }

  ngOnInit(): void {
    this.estimationService.ShowEstimationForLastIteration()
    .subscribe(estimations => {
      this.estimations = estimations;
    });
  }

}
