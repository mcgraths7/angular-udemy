import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Japanese Chicken Curry',
      'A delicious curry using chicken thighs, mild curry roux, carrots, potatoes, and soy sauce',
      'https://c1.staticflickr.com/4/3937/33154804535_e166d5fab6_b.jpg'
    ),
    new Recipe(
      'Breakfast Burrito',
      'A generic breakfast burrito wrapped in a flour tortilla with chicken sausage, egg white, and cheddar cheese',
      'https://c1.staticflickr.com/9/8238/28758422184_4a74ef640e_b.jpg'
    )
  ];

  constructor() {}
}
