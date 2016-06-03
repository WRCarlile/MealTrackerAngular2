import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
// import { NewMealComponent } from './new-meal.component';
// import { CartPipe } from './cart.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  // pipes: [CartPipe],
  directives: [MealComponent, EditMealDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="purchased">Show Cart</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | purchased:filterCart"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>

  <h3 (change) = "addTotal(total)">Total: {{ total }}</h3>

  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>

  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCart: string = "notPurchased";
  public calorieTotal: number = 0;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }

  onChange(filterOption) {
    this.filterCart = filterOption;
    this.calorieTotal = 0;
    //
    // for ( var meal of this.mealList ) {
    //   if ( meal.purchased ){
    //     this.total += album.price;
    //   }
    // }
  }
}
