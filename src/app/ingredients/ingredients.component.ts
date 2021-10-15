import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import Ingredient from './ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  ingredients = [new Ingredient('Apples', 5), new Ingredient('Oranges', 10)];
  name: string = '';
  amount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  createNewIngredient(): void {
    this.ingredients.push(new Ingredient(this.name, this.amount));
  }
}
