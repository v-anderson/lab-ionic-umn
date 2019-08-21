import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl:
      'https://cdn.idntimes.com/content-images/community/2018/04/big-slider-gado-gado-enak-dan-lezat-d15989179c334422677c80293a7b51c0_600x400.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl:
      'https://asset.kompas.com/crop/0x0:800x400/780x390/data/photo/2018/06/14/961696686.jpg',
      ingredients: ['beras', 'tepung']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl:
      'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg',
      ingredients: ['tepung', 'tomat']
    }
  ];

  constructor() { }

  penampung_resep: Recipe[] = [];

  isiData(){
    for(let i =0; i<this.recipes.length; i++){
      this.penampung_resep.push(this.recipes[i]);
    }
    return this.penampung_resep;
  }

  getAllRecipes() {
    // return [...this.recipes];
   return this.isiData();
  }

  getRecipe(recipeId: string) {
    for (let i = 0 ; i < this.penampung_resep.length; i++) {
      if (this.penampung_resep[i].id === recipeId) {
        console.log(this.penampung_resep[i]);
        break;
      } else {
        continue;
      }
    }
  }

  deleteRecipe(recipeId: string){
    for (let i = 0 ; i < this.penampung_resep.length; i++) {
      if (this.penampung_resep[i].id === recipeId) {
        this.penampung_resep.splice(i, 1);
        break;
      } else {
        continue;
      }
    }
  }

}
