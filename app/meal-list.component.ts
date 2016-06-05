import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  pipes: [FilterPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class= "container center">
    <h2> Meals:</h2>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="highCalories">High Calorie Foods</option>
      <option value="lowCalories">Low Calorie Foods</option>
    </select>
    <div *ngFor="#meal of meals | highCalories:filterMeal:selectedMeal">
      <h3 (click)="mealClicked(meal)" [class.selected]="selectedMeal === meal">{{ meal.type }}</h3>
      <ul *ngIf="selectedMeal === meal && show === true" >
        <li>Food: {{ meal.type }}</li>
        <li>Description: {{ meal.description }}</li>
        <li>Calories: {{ meal.calories }}</li>
      </ul>
    </div>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <div class="edit">
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
  public filterMeal: string = "lowCalories";
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

  }

  createMeal(newMeal: Meal): void {
    this.meals.push(newMeal);
  }

  onChange(filterOption) {
    this.filterMeal = filterOption;
  }

}
