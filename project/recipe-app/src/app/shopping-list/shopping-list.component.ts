import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Chicken Thigh', 'pound(s)', 1.5),
      new Ingredient('Carrots', 'bunch', 1),
      new Ingredient('Red Potatoes', 'loose', 4),
      new Ingredient('Curry Roux', 'cubes', 5),
      new Ingredient('Garlic', 'loose', 6),
      new Ingredient('Tortillas', 'loose', 6),
      new Ingredient('Eggs', 'dozen', 1),
      new Ingredient('Chicken Sausage', 'pound(s)', 2),
      new Ingredient('Cheddar Cheese', 'pound(s)', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

}
