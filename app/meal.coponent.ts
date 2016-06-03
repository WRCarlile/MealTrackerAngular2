import { Component } from 'angular2/core'
import { Meal } from './meal.model'

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div class="container">
    <div *ngFor="#meal of meals" >
      <h3 (click)="mealClicked(meal)" [class.selected]="selectedMeal === meal">{{ meal.name }}</h3>
      <ul *ngIf="selectedMeal === meal">
      <li>Brand: {{ meal.type }}</li>
      <li>Price: {{ meal.description }} dollars</li>
      <li>Alcohol Content: {{ meal.calories }}%</li>
  `

})
export class MealComponent {
  public meal: Meal;
  // toggleLow(setState: boolean){
  //   this.keg.low = setState;
  // }
}
