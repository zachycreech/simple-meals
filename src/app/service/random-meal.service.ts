import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomMealService {
  
  constructor(private http: HttpClient) { }

  getRandomMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    return this.http.get(url)
  }

}
