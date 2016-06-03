import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals">{{meal.type }}:  {{ meal.description }}</h3>
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
