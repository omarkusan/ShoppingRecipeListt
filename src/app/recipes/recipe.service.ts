import {  Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','http://www.seriouseats.com/images/2013/05/050813-uyghur-251448-cw-chickenplate.JPG',
                [
                    new Ingredient('Meat',1),
                    new Ingredient('French Fries',20)
                ]),
     new Recipe('Second Test Recipe','This is simply a test','http://1tv2o1g0gwh145y5v53ozm13-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/Uyghur-Kebab.jpg',
                [
                    new Ingredient('Buns',2),
                    new Ingredient('Meat',1)
                ]),
    ];
    constructor(private slService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();    
    }
    addIngredientsToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
}