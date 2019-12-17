import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes:Recipe[] = [
    new Recipe(
        'Chicken Korma',
        'A super tasty recipe cooked with minced chicken.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chicken_Korma_%286110150046%29.jpg/800px-Chicken_Korma_%286110150046%29.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Tomatoes', 20),
            new Ingredient('Onion', 40)
        ]
        ),
    new Recipe(
        'Big Fat Burger',
        'Yummy Burger',
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Bun', 2),
            new Ingredient('Onion', 40)
        ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}