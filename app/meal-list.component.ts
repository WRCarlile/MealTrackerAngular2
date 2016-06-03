import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
// import { NewMealComponent } from './new-meal.component';
// import { CartPipe } from './cart.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  // pipes: [CartPipe],
  directives: [MealComponent, EditMealDetailsComponent],
  template: `
  <div class= "container center">
    <h2> Meals:</h2>
    <div *ngFor="#meal of meals">
      <h3 (click)="mealClicked(meal)" [class.selected]="selectedMeal === meal">{{ meal.type }}</h3>
      <ul *ngIf="selectedMeal === meal && show === true" >
        <li>Food: {{ meal.type }}</li>
        <li>Description: {{ meal.description }}</li>
        <li>Calories: {{ meal.calories }}%</li>
      </ul>
    </div>

    <div>
      <edit-meal-details *ngIf="selectedMeal"[meal]="selectedMeal">

      </edit-meal-details>

    </div>
    <h4> Total Calories: {{calorieTotal}} </h4>
  </div>
  `
})

export class MealListComponent {
  public meals: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public calorieTotal: number = 0;
  public show: boolean;
  // public filterCart: string = "notPurchased";
  // public calorieTotal: number = 0;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
    console.log(this.show);
  }
  calculateCalories(Meal) {
    for (var count of this.meals) {
      if (count.calories) {
        this.calorieTotal += count.calories;
      }
    }

  }
  // createMeal(newMeal: Meal): void {
  //   this.meals.push(newMeal);
  // }

  // onChange(filterOption) {
  //   // this.filterCart = filterOption;
  //   // this.calorieTotal = 0;
  //   //
  //   // for ( var meal of this.mealList ) {
  //   //   if ( meal.purchased ){
  //   //     this.total += album.price;
  //   //   }
  //   // }
  // }
}
