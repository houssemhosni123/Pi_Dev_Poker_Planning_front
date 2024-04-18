import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() maxRating: number = 5;
  @Input() currentRating: number = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  stars: number[] = [];

  constructor() {  this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);}

  ngOnInit(): void {
  }
  rate(rating: number): void {
    this.currentRating = rating;
    this.ratingClicked.emit(rating);
  }
 

}
