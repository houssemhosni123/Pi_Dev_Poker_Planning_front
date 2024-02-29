import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estimation } from 'app/Model/estimation';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';

@Component({
  selector: 'app-estimation-show',
  templateUrl: './estimation-show.component.html',
  styleUrls: ['./estimation-show.component.scss']
})
export class EstimationShowComponent implements OnInit {

  estimations: Estimation[] = [];
  idIteration: number;
  constructor(private estimationService: EstimationserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idIteration = +params['id'];

      // Use this.idIteration to fetch estimations
      this.estimationService.getEstimationsByIdIteration(this.idIteration)
        .subscribe(estimations => {
          this.estimations = estimations;
        });
    });
  }
  }


