import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  deleteRecipe(recipeId: string) {
    this.recipesService.getRecipe(recipeId);
  }

  refresh(): void {
    location.reload();
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    // this.refresh();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
