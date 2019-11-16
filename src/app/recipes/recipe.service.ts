import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png' ),
    new Recipe('Another Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png' )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}