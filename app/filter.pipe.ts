import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "highCalories",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredFilter = args[0];
    if(desiredFilter === "highCalories") {
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else if (desiredFilter === "lowCalories") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else {
      return input;
    }
  }
}
