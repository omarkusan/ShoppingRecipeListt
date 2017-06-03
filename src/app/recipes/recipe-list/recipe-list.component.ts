import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','http://www.seriouseats.com/images/2013/05/050813-uyghur-251448-cw-chickenplate.JPG'),
     new Recipe('Second Test Recipe','This is simply a test','http://1tv2o1g0gwh145y5v53ozm13-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/Uyghur-Kebab.jpg'),
    ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
