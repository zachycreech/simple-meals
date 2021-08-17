import { Component, OnInit } from '@angular/core';
import { RandomMealService } from '../../service/random-meal.service';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {

  constructor(private randomMeal: RandomMealService) { }
  data: any=[]
  results: any=[]

  ngOnInit(): void {
    this.randomMeal.getRandomMeal().subscribe((response) => {
      this.results = response
      this.data = this.results.meals[0]
      return this.data
    })
  }

}
