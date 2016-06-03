import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent} from './meal-list.component';


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
    <meal-list>
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
      new Meal("Fries", "I only ate half of them.", 365)
    ];
  }
}

// export class Task {
//   public done: boolean = false;
//   constructor(public description: string, public id: number) {
//
//   }
