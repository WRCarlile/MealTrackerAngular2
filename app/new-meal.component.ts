import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <hr>
  <div class="add-form center">
    <h3>Create Meal</h3>
    <input placeholder="Type" class="input-lg" #newType required>
    <input placeholder="Description" class="input-lg" #newDescription required>
    <input placeholder="Calories" class="input-lg" #newCalories required>
    <br>
    <br>
  <button (click)="addMeal(newType, newDescription, newCalories)" class="btn btn-success">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userType: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var meal = new Meal(userType.value, userDescription.value, parseInt(userCalories.value));
    this.onSubmitNewMeal.emit(meal);
    userType.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }

}
